import nativeTiro from "@lib/tiro";
import nativeTiroWasmURL from "@lib/tiro.wasm";
import { CompilationResult, ExecutionResult, Runtime } from "./interfaces";

export async function createRuntime(): Promise<Runtime> {
    if (typeof window === "undefined") {
        throw new Error("Cannot compile server side.");
    }

    const { nativeTiro } = await loadTiro();
    const runtime = new nativeTiro.TiroRuntime();
    return new RuntimeImpl(runtime);
}

class RuntimeImpl implements Runtime {
    private _nativeRuntime: any;
    constructor(nativeRuntime: any) {
        this._nativeRuntime = nativeRuntime;
    }

    destroy(): void {
        if (this._nativeRuntime) {
            this._nativeRuntime.delete();
            this._nativeRuntime = undefined;
        }
    }

    compile(source: string): CompilationResult {
        this._checkDestroyed();

        const start = new Date();
        const input = JSON.stringify({ source });
        const output = JSON.parse(this._nativeRuntime.compile(input));
        output.elapsedMillis = new Date().getTime() - start.getTime();
        return output as CompilationResult;
    }

    run(functionName: string): ExecutionResult {
        this._checkDestroyed();

        const start = new Date();
        const input = JSON.stringify({ function: functionName });
        const output = JSON.parse(this._nativeRuntime.run(input));
        output.elapsedMillis = new Date().getTime() - start.getTime();
        return output as ExecutionResult;
    }

    private _checkDestroyed(): void {
        if (!this._nativeRuntime)
            throw new Error("Tiro compiler was already destroyed.");
    }
}

type TiroPromise = Promise<{ nativeTiro: any }>;

const loadTiro = (() => {
    // Lazily loaded once on demand.
    let tiroWasm: TiroPromise | undefined = undefined;

    function loadModule(): TiroPromise {
        return new Promise((resolve, reject) => {
            const instance = nativeTiro({
                noInitialRun: true,
                noExitRuntime: true,
                locateFile(file: any) {
                    if (file === "tiro.wasm") {
                        return nativeTiroWasmURL;
                    }
                    throw new Error(
                        `Unknown file requested by WebAssembly module: '${file}'.`
                    );
                },
                onAbort() {
                    reject("Native tiro module aborted.");
                },
                onRuntimeInitialized() {
                    // Must not resolve with the instance itself. It has a "then" function
                    // but is *NOT* a promise (-> infinite loop).
                    resolve({
                        nativeTiro: instance,
                    });
                },
            });
        });
    }

    return function loadTiro(): TiroPromise {
        if (!tiroWasm) {
            tiroWasm = loadModule();
        }
        return tiroWasm;
    };
})();
