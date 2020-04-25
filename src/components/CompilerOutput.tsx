import React, { memo } from "react";
import { CompilationResult } from "@/runtime";

function messageTab(messages: string[] | undefined): JSX.Element {
    const listItems = messages?.map((message, index) => {
        return <li key={index}>{message}</li>;
    });
    return <ul>{listItems}</ul>;
}

function astTab(ast: string | undefined): JSX.Element {
    return <pre className="monospace">{ast}</pre>;
}

function irTab(ir: string | undefined): JSX.Element {
    return <pre className="monospace">{ir}</pre>;
}

function bytecodeTab(bytecode: string | undefined): JSX.Element {
    return <pre className="monospace">{bytecode}</pre>;
}

function getStateMessage(props: CompilerOutputProps): string | undefined {
    switch (props.state) {
        case "empty":
            return undefined;
        case "pending":
            return "Compiling...";
        case "done": {
            return props.result?.success
                ? "Compilation succeeded"
                : "Compilation failed";
        }
    }
}

export interface CompilerOutputProps {
    state: "empty" | "pending" | "done";
    result?: CompilationResult;
}

export const CompilerOutput = memo(function CompilerOutput(
    props: CompilerOutputProps
): JSX.Element {
    const result = props.result;

    const status = getStateMessage(props);
    const elapsed = result
        ? `${result.elapsedMillis.toFixed(3)} ms`
        : undefined;
    const messages = messageTab(result?.messages);
    const ast = astTab(result?.ast);
    const ir = irTab(result?.ir);
    const bytecode = bytecodeTab(result?.bytecode);

    return (
        <div>
            <div>Status: {status}</div>
            <div>Elapsed: {elapsed}</div>
            {messages}
            {ast}
            {ir}
            {bytecode}
        </div>
    );
});
