import * as React from "react";

import { Navbar } from "../Nav";

interface IPropTypes {
  children: React.ReactNode;
}

const Layout = ({ children }: IPropTypes) => {
  return (
    <div className="min-h-screen text-gray-200 bg-gray-800">
      <Navbar />
      <div className="px-2 py-6 mx-auto max-w-7xl">{children}</div>
    </div>
  );
};

export default Layout;
