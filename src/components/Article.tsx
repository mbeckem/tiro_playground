import React from "react";
import { Classes } from "@blueprintjs/core";
import classNames from "classnames";

export const Article: React.FC = ({ children }) => {
    return (
        <div className={classNames(Classes.RUNNING_TEXT, Classes.TEXT_LARGE)}>
            {children}
        </div>
    );
};
