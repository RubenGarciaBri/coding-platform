import * as React from "react";

const CodeEditorFooter = () => {
  return (
    <div className="flex items-center justify-between">
      <button className="px-3 py-2 bg-white rounded">Go Back</button>
      <button className="px-3 py-2 text-white bg-blue-600 rounded">
        Next Challenge
      </button>
    </div>
  );
};

export default CodeEditorFooter;
