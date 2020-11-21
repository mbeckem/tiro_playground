import React from "react";
import { PageProps } from "gatsby";
import { Layout } from "@src/components/Layout";
import { SEO } from "@src/components/SEO";
import { Doxygen } from "@src/components/Doxygen";
import { Container } from "@src/components/Container";

interface ApiDocData {
    title: string;
    rawHtml: string;
}

export default function DocsArticle({
    pageContext
}: PageProps<any, ApiDocData>): JSX.Element {
    const { title, rawHtml } = pageContext;

    return (
        <Layout>
            <SEO title={[title, "libtiro Reference"]} />
            <Container>
                <Doxygen rawHtml={rawHtml} />
            </Container>
        </Layout>
    );
}
