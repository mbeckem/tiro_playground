import React from "react";
import { Classes } from "@blueprintjs/core";
import classNames from "classnames";
import styles from "./DoxygenRenderer.module.scss";
import { Container } from "./Container";
import toH from "hast-to-hyperscript";

export interface DoxygenRendererProps {
    rawHtml: string;
}

export function DoxygenRenderer({
    rawHtml
}: DoxygenRendererProps): JSX.Element {
    return (
        <Container>
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
