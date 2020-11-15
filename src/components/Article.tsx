import React from "react";
import { Classes } from "@blueprintjs/core";
import classNames from "classnames";

export interface ArticleProps {
    className?: string;
}

export const Article: React.FC<ArticleProps> = ({ className, children }) => {
    return (
        <div
            className={classNames(
                Classes.RUNNING_TEXT,
                Classes.TEXT_LARGE,
                className
            )}
        >
            {children}
        </div>
    );
};
