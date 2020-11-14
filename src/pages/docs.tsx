import React from "react";
import { Link } from "gatsby";

import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/Container";
import * as routes from "@/routes";
import { Article } from "@/components/Article";

export default function IndexPage(): JSX.Element {
    return (
        <Layout>
            <SEO title="Documentation" />

            <Container>
                <Article>
                    <h1>Documentation</h1>
                    <h2>libtiro</h2>
                    Documentation for the native C and C++ library.
                    <ul>
                        <li>Getting started (TODO)</li>
                        <li>Embedder&apos;s Guide (TODO)</li>
                        <li>
                            <Link to={routes.apidocsFile()}>API Reference</Link>
                        </li>
                    </ul>
                </Article>
            </Container>
        </Layout>
    );
}
