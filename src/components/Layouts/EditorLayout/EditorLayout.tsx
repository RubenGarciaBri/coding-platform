import * as React from "react";

import { Navbar } from "../../Nav";

interface IPropTypes {
  children: React.ReactNode;
}

const EditorLayout = ({ children }: IPropTypes) => {
  return (
    <div className="h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default EditorLayout;
