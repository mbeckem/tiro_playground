import React from "react";
import { PageProps } from "gatsby";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ApiDocRenderer } from "@/components/ApiDocRenderer";

interface ApiDocData {
    title: string;
    body: string; // rendered html
}

export default function DocsArticle({
    pageContext
}: PageProps<any, ApiDocData>): JSX.Element {
    const { title, body } = pageContext;

    return (
        <Layout>
            <SEO title={title} />
            <ApiDocRenderer body={body} />
        </Layout>
    );
}
