/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
require("@babel/register")({
    extensions: [".js", ".ts", ".tsx", ".jsx"],
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: 12
                },
                modules: "commonjs",
                loose: true
            }
        ],
        [
            require.resolve("@babel/preset-typescript"),
            {
                isTSX: true,
                allExtensions: true
            }
        ]
    ]
});
const path = require("path");
const merge = require("webpack-merge");
const fs = require("fs");
const routes = require("./src/routes/index.ts");
const glob = require("fast-glob");

const { readFile, copyFile, mkdir } = fs.promises;

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
    function getOutput() {
        switch (stage) {
            case `develop`:
                return {
                    filename: `[id].js`
                };
            case `build-javascript`:
                return {
                    filename: `[contenthash].js`,
                    chunkFilename: `[contenthash].js`
                };
        }
    }

    const config = getConfig();
    const override = {
        output: getOutput(),

        module: {
            rules: [
                {
                    test: /.*\.wasm$/,
                    type: "javascript/auto",
                    loader: "file-loader",
                    options: {
                        name: "[contenthash].[ext]",
                        outputPath: "static"
                    }
                }
            ]
        }
    };
    if (config.mode === "production") {
        override.devtool = false;
    }

    actions.replaceWebpackConfig(merge(config, override));
};

async function createMdxDocs(graphql, actions) {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allFile(filter: { sourceInstanceName: { eq: "docs" } }) {
                nodes {
                    childMdx {
                        id
                        slug
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `);
    const template = path.resolve("./src/templates/DocsArticle.tsx");
    for (const node of result.data.allFile.nodes) {
        const { id } = node.childMdx;
        const { slug } = node.childMdx.frontmatter;
        createPage({
            path: path.posix.join("/docs/", slug),
            component: template,
            context: {
                id
            }
        });
    }
}

async function createApiDocs(graphql, actions) {
    const { createPage } = actions;
    const doxygenFiles = await graphql(`
        query {
            allFile(
                filter: {
                    extension: { eq: "html" }
                    sourceInstanceName: { eq: "doxygen-embed" }
                }
            ) {
                nodes {
                    id
                    relativePath
                    absolutePath
                }
            }
        }
    `);

    // Create real gatsby pages with the embedded html content from the doxygen output
    const template = path.resolve("./src/templates/DoxygenArticle.tsx");
    const createDoxgenPage = async (node) => {
        // TODO: Transport page title via html fragment (embed json or sth)
        const { relativePath, absolutePath } = node;
        const { name, base } = path.posix.parse(relativePath);
        const rawHtml = await readFile(absolutePath, { encoding: "utf-8" });

        createPage({
            path: routes.apidocsFile(base),
            component: template,
            context: {
                title: name,
                rawHtml: rawHtml
            }
        });
    };
    await Promise.all(doxygenFiles.data.allFile.nodes.map(createDoxgenPage));

    // Copy static resources needed by the doxygen pages.
    const sourceDir = path.resolve("tiro-doxygen-embed");
    const destDir = path.resolve(`public/${routes.apidocsFolder()}`);
    const sourceFiles = await glob("**/*.{png,js}", {
        cwd: sourceDir
    });
    const copy = async (file) => {
        const sourceFile = path.join(sourceDir, file);
        const destFile = path.join(destDir, file);
        await mkdir(path.dirname(destFile), { recursive: true });
        await copyFile(sourceFile, destFile);
    };
    await Promise.all(sourceFiles.map(copy));
}

exports.createPages = async ({ graphql, actions }) => {
    await createMdxDocs(graphql, actions);
    await createApiDocs(graphql, actions);
};
