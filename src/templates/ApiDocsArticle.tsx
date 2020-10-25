import React from "react";
import { PageProps } from "gatsby";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

interface ApiDocData {
    title: string;
    body: string; // rendered html
}

const shortcodes = {};

export default function DocsArticle({
    pageContext
}: PageProps<any, ApiDocData>): JSX.Element {
    const { title, body } = pageContext;

    return (
        <Layout>
            <SEO title={title} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </Layout>
    );
}
