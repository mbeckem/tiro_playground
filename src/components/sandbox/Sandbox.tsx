import React, { Component, PureComponent } from "react";
import { List } from "immutable";

import {
    CompilationResult,
    Runtime,
    createRuntime,
    ExecutionResult
} from "@/runtime";
import { defined } from "@/utils";
import { SandboxUI } from "./SandboxUI";
import { CompilerOutputProps } from "./CompilerOutput";
import { ExecutionOutputProps } from "./ExecutionOutput";

export interface SandboxProps {
    initialSource?: string;
}

interface SandboxState {
    compiling: boolean;
    currentSource: string;
    compiled?: CompilationResult;
    executions: List<ExecutionResult>;
}

export class Sandbox extends PureComponent<{}, SandboxState> {
    private _runtime?: Runtime;

    constructor(props: Readonly<SandboxProps>) {
        super(props);
        this.state = {
            compiling: false,
            currentSource: props.initialSource ?? "",
            executions: List()
        };
    }

    async componentDidMount(): Promise<void> {
        try {
            this._runtime = await createRuntime();
            this._startCompilation(this.state.currentSource);
        } catch (e) {
            // TODO error UI
            console.error("Failed to create runtime instance", e);
            return;
        }
    }

    componentWillUnmount(): void {
        this._runtime?.destroy();
        this._runtime = undefined;
    }

    private async _startCompilation(source: string): Promise<void> {
        const runtime = defined(this._runtime, "runtime");

        // TODO: Async compilation api (Web worker?)
        try {
            await asyncSetState(this, { compiling: true });
            const result = runtime.compile(source);
            this.setState({ compiling: false, compiled: result });
        } catch (e) {
            // TODO: Error state in UI
            console.error("Compilation failed", e);
        }
    }

    render(): JSX.Element {
        const { compiling, currentSource, compiled, executions } = this.state;

        const compilationOutput: CompilerOutputProps = {
            state: compiling
                ? "compiling"
                : compiled
                ? "compiled"
                : "not-compiled",
            result: compiled
        };

        const executionOutput: ExecutionOutputProps = {
            results: executions,
            runEnabled: !!compiled?.success,
            onRunClick: this._handleRunClick,
            onClearClick: this._handleClearResultsClick
        };

        return (
            <SandboxUI
                initialSource={currentSource}
                onSourceChanged={this._handleSourceChanged}
                compilation={compilationOutput}
                execution={executionOutput}
            />
        );
    }

    private _handleSourceChanged = async (value: string): Promise<void> => {
        await asyncSetState(this, { currentSource: value });
        this._startCompilation(value);
    };

    private _handleRunClick = (): void => {
        const runtime = defined(this._runtime, "runtime");
        try {
            const exec = runtime.run("main");
            this.setState((state) => {
                return { executions: state.executions.push(exec) };
            });
            console.debug("Execution result:", exec);
        } catch (e) {
            // TODO: Error state in UI
            console.error("Execution failed", e);
        }
    };

    private _handleClearResultsClick = (): void => {
        this.setState({
            executions: List()
        });
    };
}

function asyncSetState<T extends Component, S>(
    comp: T,
    newState: S
): Promise<void> {
    return new Promise((resolve) => {
        comp.setState(newState, resolve);
    });
}
