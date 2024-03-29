import * as React from "react";

import { Navbar } from "../../Nav";

interface IPropTypes {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: IPropTypes) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-2 py-6 mx-auto max-w-7xl">{children}</div>
    </div>
  );
};

export default DefaultLayout;
