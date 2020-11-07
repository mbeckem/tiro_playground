import React from "react";
import { Link } from "gatsby";

import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/Container";
import * as routes from "@/routes";

export default function IndexPage(): JSX.Element {
    return (
        <Layout>
            <SEO title="Documentation" />

            <Container>
                <Link to={routes.apidocsFile()}>API Documentation</Link>
            </Container>
        </Layout>
    );
}
