import React from "react";

import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

const NotFoundPage = (): JSX.Element => (
    <Layout>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>The requested page does not exist.</p>
    </Layout>
);

export default NotFoundPage;
