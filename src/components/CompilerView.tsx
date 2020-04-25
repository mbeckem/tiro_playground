import React, { memo, ReactNode } from "react";
import classNames from "classnames";

import { Editor } from "./Editor";
import { CompilationResult } from "@/runtime";
import styles from "./CompilerView.module.scss";

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

const RenderResult = memo(function RenderResult(props: {
    result: CompilationResult;
}): JSX.Element {
    const { result } = props;
    const messages = result.messages.map((message, index) => {
        return <li key={index}>{message}</li>;
    });

    return (
        <div>
            <div>Success: {result.success.toString()}</div>
            <div>Time taken: {result.elapsedMillis.toFixed(3)} ms</div>
            <div>Messages:</div>
            <ul>{messages}</ul>
            <pre className="monospace">{result.ast}</pre>
            <pre className="monospace">{result.ir}</pre>
            <pre className="monospace">{result.bytecode}</pre>
        </div>
    );
});

const ResultPane = memo(function ResultPane(props: {
    compiling: boolean;
    result?: CompilationResult;
}): JSX.Element {
    const { compiling, result } = props;

    const statusText = compiling ? <div>Comdiviling...</div> : null;
    const resultText = result ? <RenderResult result={result} /> : null;
    return (
        <div style={{ height: "100%", overflow: "auto" }}>
            {statusText}
            {resultText}
        </div>
    );
});

export interface CompilerViewProps {
    compiling: boolean;
    initialSource?: string;
    result?: CompilationResult;
    onSourceChanged: (source: string) => void;
}

export const CompilerView = memo(function CompilerView({
    compiling,
    initialSource,
    result,
    onSourceChanged,
}: CompilerViewProps): JSX.Element {
    const editorPanel = (
        <Editor
            initialSource={initialSource ?? ""}
            onChange={onSourceChanged}
        />
    );
    const compilerPanel = <ResultPane compiling={compiling} result={result} />;
    const runtimePanel = <div>Output...</div>;

    return (
        <SplitLayout
            editorPanel={editorPanel}
            compilerPanel={compilerPanel}
            runtimePanel={runtimePanel}
        />
    );
});
