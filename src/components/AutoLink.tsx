import { Link } from "gatsby";
import React from "react";
import { ExternalLink } from "./ExternalLink";

interface AutoLinkProps {
    href: string;
    className?: string;
}

/**
 * A simple link component that automatically uses gatsby link for internal urls, and ExternalLink
 * for external urls.
 */
export const AutoLink: React.FC<AutoLinkProps> = (props) => {
    const to: string = props.href;
    if (to.startsWith("/") || to.startsWith(".") || to.startsWith("#"))
        return <Link to={to} {...props} />;

    return <ExternalLink to={to} {...props} />;
};
