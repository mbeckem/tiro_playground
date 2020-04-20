import React, { memo } from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/mode-plain_text";
import "ace-builds/src-noconflict/ext-language_tools";

import styles from "./Editor.module.scss";

export interface EditorProps {
    initialSource: string;
    onChange: (newSource: string) => void;
}

/* 
// Only client side import works.
const AceEditor = ((): any => {
    if (typeof window === "undefined") return null;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const AceEditor = require("react-ace").default;
    require("ace-builds/src-noconflict/theme-solarized_light");
    require("ace-builds/src-noconflict/mode-plain_text");
    require("ace-builds/src-noconflict/ext-language_tools");
    return AceEditor;
})(); */

export const Editor = memo(function Editor({
    initialSource,
    onChange,
}: EditorProps): JSX.Element {
    return (
        <div className={styles.editorContainer}>
            <AceEditor
                name="tiro_editor" // TODO Must be unique
                className={styles.editor}
                mode="plain_text"
                theme="solarized_light"
                onChange={onChange}
                height="100%"
                width="100%"
                showPrintMargin={false}
                debounceChangePeriod={100}
                value={initialSource}
                enableBasicAutocompletion={true}
                enableSnippets={false}
                setOptions={{
                    showLineNumbers: true,
                    tabSize: 4,
                }}
            />
        </div>
    );
});
