import React, { memo, ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import classNames from "classnames";
import { Header } from "./Header";

import styles from "./Layout.module.scss";

export interface LayoutProps {
    fullHeight?: boolean;
    children: ReactNode;
}

export const Layout = memo(function Layout({
    fullHeight = false,
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
    if (fullHeight) {
        // The content element uses display: flex. Hiding overflow limits
        // its max size to its container's size.
        contentStyle["overflow"] = "hidden";
    }

    return (
        <div
            className={classNames(styles.container, {
                [styles.fullHeight]: fullHeight
            })}
        >
            <header className={styles.header}>
                <Header siteTitle={data.site.siteMetadata.title} />
            </header>
            <main className={styles.content} style={contentStyle}>
                {children}
            </main>
        </div>
    );
});
