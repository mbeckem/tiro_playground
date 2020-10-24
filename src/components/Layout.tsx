import React, { memo, ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Header } from "./Header";
import styles from "./Layout.module.scss";

export interface LayoutProps {
    scrollContent?: boolean;
    children: ReactNode;
}

export const Layout = memo(function Layout({
    scrollContent,
    children
}: LayoutProps): JSX.Element {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const contentStyle: any = {};
    if (scrollContent) {
        // The content element uses display: flex. Hiding overflow limits
        // its max size to its container's size.
        contentStyle["overflow"] = "hidden";
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header siteTitle={data.site.siteMetadata.title} />
            </header>
            <main className={styles.content} style={contentStyle}>
                {children}
            </main>
        </div>
    );
});
