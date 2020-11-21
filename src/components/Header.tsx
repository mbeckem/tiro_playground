import React, { memo } from "react";
import { Classes, Navbar } from "@blueprintjs/core";
import { Link } from "gatsby";
import classNames from "classnames";
import * as routes from "@src/routes";
import GithubIcon from "@assets/github.inline.svg";
import { ExternalLink } from "./ExternalLink";
import styles from "./Header.module.scss";

export const Header = memo(function Header(props: { siteTitle: string }) {
    return (
        <Navbar className={classNames(Classes.DARK, styles.header)}>
            <Navbar.Group>
                <Navbar.Heading>
                    <Link
                        to={routes.index()}
                        className={classNames(styles.title, styles.pageLink)}
                    >
                        {props.siteTitle}
                    </Link>
                </Navbar.Heading>
                <Link to={routes.docs()} className={styles.pageLink}>
                    Documentation
                </Link>
                <Link to={routes.sandbox()} className={styles.pageLink}>
                    Sandbox
                </Link>
                <Link to={routes.about()} className={styles.pageLink}>
                    About
                </Link>
            </Navbar.Group>
            <Navbar.Group align="right">
                <ExternalLink
                    className={styles.pageLink}
                    showIcon={false}
                    to="https://github.com/mbeckem/tiro"
                >
                    <GithubIcon className={styles.icon} />
                    Github
                </ExternalLink>
            </Navbar.Group>
        </Navbar>
    );
    // <img className={styles.icon} src={githubIcon} />
});
