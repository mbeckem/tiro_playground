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
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-sharp",
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "docs",
                path: `${__dirname}/docs/`
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "doxygen-embed",
                path: `${__dirname}/tiro-doxygen-embed`
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
                    "@": "src/",
                    "@lib": "lib/"
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
