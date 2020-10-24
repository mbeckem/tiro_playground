import React, { memo, ReactNode } from "react";
import { Tabs, Tab, UL } from "@blueprintjs/core";

import { CompilationResult } from "@/runtime";
import { defined } from "@/utils";
import styles from "./CompilerOutput.module.scss";

function statusMessage(props: CompilerOutputProps): ReactNode {
    switch (props.state) {
        case "not-compiled":
            return undefined;
        case "compiling":
            return "Compiling...";
        case "compiled": {
            const result = defined(props.result, "props.result");
            const elapsed = `(after ${result.elapsedMillis.toFixed(2)} ms)`;
            const status = result.success
                ? "Compilation succeeded"
                : "Compilation failed";
            return (
                <>
                    {status} <span>{elapsed}</span>.
                </>
            );
        }
    }
}

function statusContent(props: CompilerOutputProps): JSX.Element {
    const result = props.result;
    const messages = result?.messages;

    const messageItems = messages?.map((message, index) => {
        return <li key={index}>{message}</li>;
    });
    return (
        <>
            <div>{statusMessage(props)}</div>
            <UL>{messageItems}</UL>
        </>
    );
}

function astContent(ast: string | undefined): JSX.Element | undefined {
    return ast ? <pre>{ast}</pre> : undefined;
}

function irContent(ir: string | undefined): JSX.Element | undefined {
    return ir ? <pre>{ir}</pre> : undefined;
}

function bytecodeContent(
    bytecode: string | undefined
): JSX.Element | undefined {
    return bytecode ? <pre>{bytecode}</pre> : undefined;
}

function makeTab(
    id: string,
    title: string,
    content: JSX.Element | undefined
): JSX.Element {
    return (
        <Tab
            key={id}
            className={styles.tab}
            panelClassName={styles.tabPanel}
            id={id}
            title={title}
            panel={content}
        />
    );
}

export interface CompilerOutputProps {
    state: "not-compiled" | "compiling" | "compiled";
    result?: CompilationResult;
}

export const CompilerOutput = memo(function CompilerOutput(
    props: CompilerOutputProps
): JSX.Element {
    const result = props.result;

    const tabs = [
        {
            id: "status",
            title: "Status",
            content: statusContent(props)
        },
        {
            id: "ast",
            title: "Abstract Syntax Tree",
            content: astContent(result?.ast.trim())
        },
        {
            id: "ir",
            title: "Intermediate Repr.",
            content: irContent(result?.ir.trim())
        },
        {
            id: "bytecode",
            title: "Bytecode",
            content: bytecodeContent(result?.bytecode.trim())
        }
    ];

    return (
        <Tabs
            className={styles.tabsContainer}
            id="compilerOutput"
            defaultSelectedTabId={tabs[0].id}
        >
            {tabs.map((props) => makeTab(props.id, props.title, props.content))}
        </Tabs>
    );
});
