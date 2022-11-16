import * as React from "react";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import transpile from "../../../utils/transpile";
import format from "../../../utils/format";
import { codeSample } from "../../../data/codeSample";

interface IPropTypes {}

const CodeEditor = ({}: IPropTypes) => {
  const [code, setCode] = React.useState(format(codeSample));

  const html = `
  <html>
  <head>
    <title>Code Editor</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
    <body>
      <div id="root"></div>
    </body>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script>${transpile(code)}</script>
  </html>
  `;

  // TODO: Remove anys
  const onChange = React.useCallback((value: any, viewUpdate: any) => {
    setCode(value);
  }, []);

  return (
    <div className="flex h-full">
      <div className="w-1/2">
        <div className="flex items-center justify-end p-2">
          <button
            className="px-2 py-1 text-sm text-gray-800 bg-white rounded"
            onClick={() => {
              setCode(format(code));
            }}
          >
            Format Code
          </button>
        </div>
        <CodeMirror
          theme="dark"
          height="100%"
          extensions={[javascript({ jsx: true, typescript: true })]}
          value={code}
          onChange={onChange}
          className="h-full"
        />
      </div>
      <iframe
        title="output"
        srcDoc={html}
        sandbox="allow-scripts"
        width="100%"
        className="h-full p-4 bg-white grow"
      />
    </div>
  );
};

export default CodeEditor;
