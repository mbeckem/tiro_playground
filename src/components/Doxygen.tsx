import React from "react";
import { LoadScript, ScriptId } from "./LoadScript";
import { apidocsFile } from "@/routes";
import { withPrefix } from "gatsby";
import { Classes } from "@blueprintjs/core";
import classNames from "classnames";

import "@/styles/doxygen.scss";

const jqueryScript = new ScriptId(
    "doxygen-support-jquery",
    withPrefix(apidocsFile("jquery.js"))
);
const dynsectionsScript = new ScriptId(
    "doxygen-support-dynsections",
    withPrefix(apidocsFile("dynsections.js"))
);

export interface DoxygenProps {
    rawHtml: string;
}

export function Doxygen({ rawHtml }: DoxygenProps): JSX.Element {
    return (
        <>
            <LoadScript script={jqueryScript} />
            <LoadScript script={dynsectionsScript} />
            <div
                className={classNames(
                    Classes.RUNNING_TEXT,
                    Classes.TEXT_LARGE,
                    "doxygen"
                )}
                dangerouslySetInnerHTML={{ __html: rawHtml }}
            />
        </>
    );
}
