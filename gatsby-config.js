const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/tiro_playground" : "";

module.exports = {
    pathPrefix: prefix,
    siteMetadata: {
        title: "tiro",
        description: "The tiro programming language.",
        author: "Michael Beckemeyer"
    },
    plugins: [
        "gatsby-plugin-catch-links",
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /\.inline\.svg$/
                }
            }
        },
        {
            resolve: "gatsby-plugin-mdx"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "articles",
                path: `${__dirname}/docs/articles`
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "doxygen-embed",
                path: `${__dirname}/docs/doxygen-embed`
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-plugin-typescript",
        {
            resolve: "gatsby-plugin-sass",
            options: {
                implementation: require("sass")
            }
        },
        "gatsby-plugin-webpack-size",
        {
            resolve: "gatsby-alias-imports",
            options: {
                aliases: {
                    "@src": "src/",
                    "@assets": "assets/",
                    "@lib": "lib/",
                    "@docs": "docs/"
                }
            }
        },
        {
            resolve: "gatsby-plugin-remove-console",
            options: {
                exclude: ["error", "warn", "log", "debug"] // Log, debug: dont remove wasm output for now
            }
        }
    ]
};
