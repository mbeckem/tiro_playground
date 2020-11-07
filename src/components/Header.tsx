import React, { memo } from "react";
import { Navbar } from "@blueprintjs/core";
import { Link } from "gatsby";
import classNames from "classnames";

import * as routes from "@/routes";
import styles from "./Header.module.scss";

function HeaderLink(props: {
    text: string;
    to: string;
    className?: string;
}): JSX.Element {
    const { text, to } = props;
    return (
        <Link to={to} className={classNames(styles.pageLink, props.className)}>
            {text}
        </Link>
    );
}

export const Header = memo(function Header(props: { siteTitle: string }) {
    return (
        <Navbar className={classNames("bp3-dark", styles.header)}>
            <Navbar.Group>
                <Navbar.Heading>
                    <HeaderLink
                        to={routes.index()}
                        text={props.siteTitle}
                        className={styles.title}
                    />
                </Navbar.Heading>
                <HeaderLink to={routes.docs()} text="Documentation" />
                <HeaderLink to={routes.sandbox()} text="Sandbox" />
                <HeaderLink to={routes.about()} text="About" />
            </Navbar.Group>
        </Navbar>
    );
});
