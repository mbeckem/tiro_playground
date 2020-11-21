import React from "react";

import { Layout } from "@src/components/Layout";
import { SEO } from "@src/components/SEO";
import { Container } from "@src/components/Container";

export default function IndexPage(): JSX.Element {
    return (
        <Layout>
            <SEO title="About" />
            <Container>About this site...</Container>
        </Layout>
    );
}
