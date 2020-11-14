import React from "react";
import { Classes } from "@blueprintjs/core";
import classNames from "classnames";
import { Container } from "./Container";
import { LoadScript, ScriptId } from "./LoadScript";
import { apidocsFile } from "@/routes";
import { withPrefix } from "gatsby";

import "@/styles/doxygen.scss";

const jqueryScript = new ScriptId(
    "doxygen-support-jquery",
    withPrefix(apidocsFile("jquery.js"))
);
const dynsectionsScript = new ScriptId(
    "doxygen-support-dynsections",
    withPrefix(apidocsFile("dynsections.js"))
);

export interface DoxygenRendererProps {
    rawHtml: string;
}

export function DoxygenRenderer({
    rawHtml
}: DoxygenRendererProps): JSX.Element {
    return (
        <Container>
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
        </Container>
    );
}
