import { Icon } from "@blueprintjs/core";
import React from "react";

export interface ExternalLinkProps {
    to: string;
    className?: string;
    showIcon?: boolean;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
    to,
    className,
    children,
    showIcon = true
}) => {
    const icon = showIcon && (
        <Icon
            icon="share"
            iconSize={12}
            style={{ verticalAlign: "baseline", paddingRight: "4px" }}
        />
    );
    return (
        <a
            className={className}
            href={to}
            rel="noopener noreferrer"
            target="_blank"
        >
            {icon}
            {children}
        </a>
    );
};
