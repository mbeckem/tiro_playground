import React, { memo, ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Header } from "./Header";

export const Layout = memo(function Layout(props: { children: ReactNode }) {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
                style={{
                    margin: "0 auto",
                    maxWidth: 960,
                    padding: "0 1.0875rem 1.45rem",
                }}
            >
                <main>{props.children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with{" "}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </>
    );
});
