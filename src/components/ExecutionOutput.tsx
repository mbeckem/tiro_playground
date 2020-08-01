import React, { memo, useRef, useEffect } from "react";
import { List } from "immutable";

import { ExecutionResult } from "@/runtime";
import { Button, ButtonGroup } from "@blueprintjs/core";
import styles from "./ExecutionOutput.module.scss";

const Result = memo(function Result(props: {
    result: ExecutionResult;
}): JSX.Element {
    const { result } = props;
    const elapsed = `${result.elapsedMillis.toFixed(2)} ms`;

    const title = result.success
        ? `Function returned ${result.value} (after ${elapsed}).`
        : `Execution failed (after ${elapsed}).`;

    const error = result.success ? undefined : (
        <div className={styles.error}>{result.error || "Unknown error"}</div>
    );

    return (
        <div className={styles.result}>
            <div className={styles.title}>{title}</div>
            {error}
        </div>
    );
});

const ResultList = memo(function ResultList(props: {
    results: List<ExecutionResult>;
}): JSX.Element {
    const bottomDiv = useRef<any>(undefined);

    useEffect(() => {
        bottomDiv.current?.scrollIntoView({ behaviour: "smooth" });
    });

    return (
        <div className={styles.results}>
            {props.results.map((result, index) => (
                <Result key={index} result={result} />
            ))}
            <div ref={bottomDiv} />
        </div>
    );
});

export interface ExecutionOutputProps {
    results: List<ExecutionResult>;

    runEnabled: boolean;
    onRunClick: () => void;
    onClearClick: () => void;
}

export const ExecutionOutput = memo(function ExecutionOutput(
    props: ExecutionOutputProps
) {
    const { results, runEnabled, onRunClick, onClearClick } = props;

    return (
        <div className={styles.panel}>
            <div className={styles.toolBar}>
                <ButtonGroup minimal>
                    <Button
                        icon="play"
                        intent="success"
                        disabled={!runEnabled}
                        onClick={onRunClick}
                        small
                    >
                        Run
                    </Button>
                    <Button icon="delete" onClick={onClearClick} small>
                        Clear
                    </Button>
                </ButtonGroup>
            </div>
            <ResultList results={results} />
        </div>
    );
});
