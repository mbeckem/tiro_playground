import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "@/components/Layout";
import { CodeBlock } from "@/components/CodeBlock";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/Container";
import { Article } from "@/components/Article";
import { ExternalLink } from "@/components/ExternalLink";

const AutoLink: React.FC<any> = (props) => {
    const to: string = props.href;
    if (to.startsWith("/") || to.startsWith("."))
        return <Link to={to} {...props} />;

    if (to.startsWith("#")) return <a {...props} />;

    return <ExternalLink to={to} {...props} />;
};

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
