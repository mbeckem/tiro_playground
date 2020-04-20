import React, { memo, ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Header } from "./Header";
import styles from "./Layout.module.scss";

export const Layout = memo(function Layout(props: {
    children: ReactNode;
}): JSX.Element {
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
        <div className={styles.container}>
            <header className={styles.header}>
                <Header siteTitle={data.site.siteMetadata.title} />
            </header>
            <main className={styles.content}>{props.children}</main>
        </div>
    );
});
