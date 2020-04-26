import React, { memo, ReactNode } from "react";
import classNames from "classnames";

import { CompilerOutput, CompilerOutputProps } from "./CompilerOutput";
import { Editor } from "./Editor";
import { ExecutionOutputProps, ExecutionOutput } from "./ExecutionOutput";
import styles from "./PlaygroundView.module.scss";

// Only client side import works.
const Split = ((): any => {
    if (typeof window === "undefined") return null;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require("react-split").default;
})();

const SplitLayout = memo(function SplitLayout(props: {
    editorPanel: ReactNode;
    compilerPanel: ReactNode;
    runtimePanel: ReactNode;
}): JSX.Element {
    return (
        <Split
            className={classNames(styles.split, styles.columns)}
            sizes={[50, 50]}
            minSize={100}
        >
            <div className={styles.column}>{props.editorPanel}</div>
            <div className={styles.column}>
                <Split
                    direction="vertical"
                    className={classNames(styles.split, styles.rows)}
                    sizes={[50, 50]}
                    minSize={100}
                >
                    <div className={styles.row}>{props.compilerPanel}</div>
                    <div className={styles.row}>{props.runtimePanel}</div>
                </Split>
            </div>
        </Split>
    );
});

export interface PlaygroundViewProps {
    initialSource?: string;
    onSourceChanged: (source: string) => void;

    compilation: CompilerOutputProps;
    execution: ExecutionOutputProps;
}

export const PlaygroundView = memo(function CompilerView({
    initialSource,
    onSourceChanged,
    compilation,
    execution,
}: PlaygroundViewProps): JSX.Element {
    const editorPanel = (
        <Editor
            initialSource={initialSource ?? ""}
            onChange={onSourceChanged}
        />
    );
    const compilerPanel = <CompilerOutput {...compilation} />;
    const runtimePanel = <ExecutionOutput {...execution} />;

    return (
        <SplitLayout
            editorPanel={editorPanel}
            compilerPanel={compilerPanel}
            runtimePanel={runtimePanel}
        />
    );
});
