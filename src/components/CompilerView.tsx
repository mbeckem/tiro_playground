import React, { memo } from "react";

import { Editor } from "./Editor";
import { CompilationResult } from "@/runtime";
import styles from "./CompilerView.module.scss";

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
    return (
        <div className={styles.container}>
            <Split className={styles.split} sizes={[50, 50]} minSize={100}>
                <div className={styles.textPane}>
                    <Editor
                        initialSource={initialSource ?? ""}
                        onChange={onSourceChanged}
                    ></Editor>
                </div>
                <div className={styles.resultPane}>
                    <ResultPane compiling={compiling} result={result} />
                </div>
            </Split>
        </div>
    );
});

// Only client side import works.
const Split = ((): any => {
    if (typeof window === "undefined") return null;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require("react-split").default;
})();

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
        <>
            {statusText}
            {resultText}
        </>
    );
});
