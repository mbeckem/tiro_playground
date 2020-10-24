import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "@/components/Layout";

const shortcodes = {};

export default function DocsArticle({ data: { mdx } }: any): JSX.Element {
    return (
        <Layout>
            <h1>{mdx.frontmatter.title}</h1>
            <MDXProvider components={shortcodes}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
        </Layout>
    );
}

export const query = graphql`
    query ArticleQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                slug
            }
        }
    }
`;
