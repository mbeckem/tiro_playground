import React from "react";

import { Layout } from "@src/components/Layout";
import { SEO } from "@src/components/SEO";
import { Container } from "@src/components/Container";

const NotFoundPage = (): JSX.Element => (
    <Layout>
        <SEO title="404: Not found" />
        <Container>
            <h1>Page not found</h1>
            <p>The requested page does not exist.</p>
        </Container>
    </Layout>
);

export default NotFoundPage;
