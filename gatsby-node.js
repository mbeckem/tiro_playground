/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");
const merge = require("webpack-merge");
const fs = require("fs");
const parse5 = require("parse5");
const hastFromParse5 = require("hast-util-from-parse5");

const { readFile } = fs.promises;

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
    const result = await graphql(`
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

    const template = path.resolve("./src/templates/DoxygenArticle.tsx");
    for (const node of result.data.allFile.nodes) {
        // TODO: Transport page title via html fragment (embed json or sth)
        const { relativePath, absolutePath } = node;
        const { dir, name, base } = path.posix.parse(relativePath);
        const rawHtml = await readFile(absolutePath, { encoding: "utf-8" });

        createPage({
            path: path.posix.join("/apidocs", dir, base),
            component: template,
            context: {
                title: name,
                rawHtml: rawHtml
            }
        });
    }
}

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

exports.createPages = async ({ graphql, actions }) => {
    await createMdxDocs(graphql, actions);
    await createApiDocs(graphql, actions);
};
