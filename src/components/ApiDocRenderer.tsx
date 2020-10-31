import React from "react";
import { Classes } from "@blueprintjs/core";
import classNames from "classnames";
import styles from "./ApiDocRenderer.module.scss";
import { Container } from "./Container";

export interface ApiDocRendererProps {
    body: string; // Raw html
}

export function ApiDocRenderer({ body }: ApiDocRendererProps): JSX.Element {
    return (
        <Container>
            <div
                className={classNames(
                    Classes.RUNNING_TEXT,
                    Classes.TEXT_LARGE,
                    styles.apidocs
                )}
                dangerouslySetInnerHTML={{ __html: body }}
            />
        </Container>
    );
}
