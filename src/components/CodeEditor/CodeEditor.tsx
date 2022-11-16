import * as React from "react";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import transpile from "../../utils/transpile";

interface IPropTypes {}

const CodeEditor = ({}: IPropTypes) => {
  const [code, setCode] = React.useState("");

  React.useEffect(() => {
    setCode(
      `const App = () => {
      const [test, setTest] = React.useState(true)
      console.log(test)
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );`
    );
  }, []);

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
    <>
      <CodeMirror
        theme="dark"
        height="200px"
        extensions={[javascript({ jsx: true, typescript: true })]}
        value={code}
        onChange={onChange}
      />
      <iframe
        title="output"
        srcDoc={html}
        sandbox="allow-scripts"
        width="100%"
        height="300px"
        className="border-2 border-gray-200"
      />
    </>
  );
};

export default CodeEditor;
