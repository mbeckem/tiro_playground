import React, { Component, PureComponent } from "react";

import { CompilationResult, Runtime, createRuntime } from "@/runtime";
import { PlaygroundView } from "@/components/PlaygroundView";

export interface PlaygroundProps {
    initialSource?: string;
}

interface PlaygroundState {
    compiling: boolean;
    currentSource: string;
    result?: CompilationResult;
}

export class Playground extends PureComponent<{}, PlaygroundState> {
    private _runtime?: Runtime;

    constructor(props: Readonly<PlaygroundProps>) {
        super(props);
        this.state = {
            compiling: false,
            currentSource: props.initialSource ?? "",
        };
    }

    async componentDidMount(): Promise<void> {
        let runtime;
        try {
            runtime = await createRuntime();
        } catch (e) {
            // TODO error UI
            console.error("Failed to create runtime instance", e);
            return;
        }

        this._runtime = runtime;
        this._startCompilation(this.state.currentSource);
    }

    componentWillUnmount(): void {
        this._runtime?.destroy();
        this._runtime = undefined;
    }

    private async _startCompilation(source: string): Promise<void> {
        // TODO: Async compilation api (Web worker?)
        try {
            await asyncSetState(this, { compiling: true });
            const result = this._runtime?.compile(source);
            this.setState({ compiling: false, result });

            const exec = this._runtime?.run("main");
            console.debug(exec);
        } catch (e) {
            // TODO: Error state in UI
            console.error("Compilation failed", e);
        }
    }

    render(): JSX.Element {
        const { compiling, currentSource, result } = this.state;
        return (
            <PlaygroundView
                compiling={compiling}
                initialSource={currentSource}
                result={result}
                onSourceChanged={this._handleSourceChanged}
            />
        );
    }

    private _handleSourceChanged = async (value: string): Promise<void> => {
        await asyncSetState(this, { currentSource: value });
        this._startCompilation(value);
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
