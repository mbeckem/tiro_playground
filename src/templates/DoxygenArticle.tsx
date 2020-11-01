import React from "react";
import { PageProps } from "gatsby";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { DoxygenRenderer } from "@/components/DoxygenRenderer";

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
            <SEO title={title} />
            <DoxygenRenderer rawHtml={rawHtml} />
        </Layout>
    );
}
