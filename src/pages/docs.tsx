import React from "react";
import { Link } from "gatsby";

import { Layout } from "@src/components/Layout";
import { SEO } from "@src/components/SEO";
import { Container } from "@src/components/Container";
import * as routes from "@src/routes";
import { Article } from "@src/components/Article";
import { ExternalLink } from "@src/components/ExternalLink";

export default function IndexPage(): JSX.Element {
    return (
        <Layout>
            <SEO title="Documentation" />

            <Container>
                <Article>
                    <h1>Documentation</h1>
                    <section>
                        <h2>The Tiro Language</h2>
                        Documentation for the language itself.
                        <ul>
                            <li>Introduction</li>
                            <li>
                                <ExternalLink to="https://github.com/mbeckem/tiro/blob/master/docs/grammar.md">
                                    Grammar
                                </ExternalLink>
                            </li>
                            <li>The Standard Library</li>
                        </ul>
                    </section>
                    <section>
                        <h2>libtiro</h2>
                        Documentation for the native C and C++ library.
                        <ul>
                            <li>
                                <Link to={routes.LibTiro.gettingStarted()}>
                                    Getting started
                                </Link>
                            </li>
                            <li>
                                <ExternalLink to="https://github.com/mbeckem/tiro/blob/master/docs/building.md">
                                    Building libtiro
                                </ExternalLink>
                            </li>
                            <li>
                                <Link to={routes.LibTiro.embeddersGuide()}>
                                    Embedder&apos;s Guide
                                </Link>
                            </li>
                            <li>
                                <Link to={routes.apidocsIndex()}>
                                    API Reference
                                </Link>
                            </li>
                            <li>
                                <ExternalLink to="https://github.com/mbeckem/tiro">
                                    Github Project
                                </ExternalLink>
                            </li>
                        </ul>
                    </section>
                </Article>
            </Container>
        </Layout>
    );
}
