import * as React from "react";

import { Navbar } from "../Navbar";

interface IPropTypes {
  children: React.ReactNode;
}

const Layout = ({ children }: IPropTypes) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
