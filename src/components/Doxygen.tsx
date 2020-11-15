import React from "react";
import { LoadScript, ScriptId } from "./LoadScript";
import { apidocsFile } from "@/routes";
import { withPrefix } from "gatsby";

import "@/styles/doxygen.scss";
import { Article } from "./Article";

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
            <Article className="doxygen">
                <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
            </Article>
        </>
    );
}
