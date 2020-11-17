import classNames from "classnames";
import React from "react";
import styles from "./ExternalLink.module.scss";

export interface ExternalLinkProps {
    to: string;
    className?: string;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
    to,
    className,
    children
}) => {
    return (
        <a
            className={classNames(styles.link, className)}
            href={to}
            rel="noopener noreferrer"
            target="_blank"
        >
            {children}
        </a>
    );
};
