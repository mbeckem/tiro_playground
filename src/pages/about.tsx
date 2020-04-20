import React from "react";

import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function IndexPage(): JSX.Element {
    return (
        <Layout>
            <SEO title="About" />
            About this site...
        </Layout>
    );
}
