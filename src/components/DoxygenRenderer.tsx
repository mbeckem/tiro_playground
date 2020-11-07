import React from "react";
import { Classes } from "@blueprintjs/core";
import classNames from "classnames";
import styles from "./DoxygenRenderer.module.scss";
import { Container } from "./Container";
import { LoadScript, ScriptId } from "./LoadScript";
import { apidocsFile } from "@/routes";

const jqueryScript = new ScriptId(
    "doxygen-support-jquery",
    apidocsFile("jquery.js")
);
const dynsectionsScript = new ScriptId(
    "doxygen-support-dynsections",
    apidocsFile("dynsections.js")
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
                    styles.doxygen
                )}
                dangerouslySetInnerHTML={{ __html: rawHtml }}
            />
        </Container>
    );
}
