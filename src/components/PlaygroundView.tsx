import React, { memo, ReactNode } from "react";
import classNames from "classnames";

import { CompilerOutput } from "./CompilerOutput";
import { Editor } from "./Editor";
import { CompilationResult } from "@/runtime";
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
    compiling: boolean;
    initialSource?: string;
    result?: CompilationResult;
    onSourceChanged: (source: string) => void;
}

export const PlaygroundView = memo(function CompilerView({
    compiling,
    initialSource,
    result,
    onSourceChanged,
}: PlaygroundViewProps): JSX.Element {
    function compilerOutput(): JSX.Element {
        const state = compiling ? "pending" : result ? "done" : "empty";
        return <CompilerOutput state={state} result={result} />;
    }

    const editorPanel = (
        <Editor
            initialSource={initialSource ?? ""}
            onChange={onSourceChanged}
        />
    );
    const compilerPanel = compilerOutput();
    const runtimePanel = <div>Output...</div>;

    return (
        <SplitLayout
            editorPanel={editorPanel}
            compilerPanel={compilerPanel}
            runtimePanel={runtimePanel}
        />
    );
});
