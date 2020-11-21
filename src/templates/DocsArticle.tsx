import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "@src/components/Layout";
import { CodeBlock } from "@src/components/CodeBlock";
import { SEO } from "@src/components/SEO";
import { Container } from "@src/components/Container";
import { Article } from "@src/components/Article";
import { AutoLink } from "@src/components/AutoLink";

const shortcodes = {
    a: AutoLink,
    pre: function pre(props: any) {
        return <div {...props} />;
    },
    code: CodeBlock
};

export default function DocsArticle({ data: { mdx } }: any): JSX.Element {
    const title = mdx.frontmatter.title;
    const body = mdx.body;
    return (
        <Layout>
            <SEO title={title}></SEO>
            <Container>
                <Article>
                    <h1>{title}</h1>
                    <MDXProvider components={shortcodes}>
                        <MDXRenderer>{body}</MDXRenderer>
                    </MDXProvider>
                </Article>
            </Container>
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
