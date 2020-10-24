import React, { memo } from "react";
import { Navbar } from "@blueprintjs/core";
import { Link } from "gatsby";

import classNames from "classnames";
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
                        to="/"
                        text={props.siteTitle}
                        className={styles.title}
                    />
                </Navbar.Heading>
                <HeaderLink to="/sandbox" text="Sandbox" />
                <HeaderLink to="/reference" text="Reference" />
                <HeaderLink to="/about" text="About" />
            </Navbar.Group>
        </Navbar>
    );
});
