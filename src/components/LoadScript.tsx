import { FC, useEffect } from "react";

let nextid = 1;

// Ensure unique ids. Every new instance included a unique number.
export class ScriptId {
    readonly id: string;
    readonly name: string;
    readonly src: string;

    constructor(name: string, src: string) {
        this.id = `script-${nextid++}-${name}`;
        this.name = name;
        this.src = src;
    }
}

export interface LoadScriptProps {
    script: ScriptId;
}

// Load a script, identified by its id. The same id will never be loaded more than once.
export const LoadScript: FC<LoadScriptProps> = ({
    script
}: LoadScriptProps) => {
    useEffect(() => {
        const existing = document.getElementById(script.id);
        if (existing) {
            return;
        }

        const tag = document.createElement("script");
        tag.id = script.id;
        tag.type = "text/javascript";
        tag.src = script.src;
        tag.async = false;
        document.head.appendChild(tag);
    });
    return null;
};
