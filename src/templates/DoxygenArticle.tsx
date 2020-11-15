import React from "react";
import { PageProps } from "gatsby";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Doxygen } from "@/components/Doxygen";
import { Container } from "@/components/Container";

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
