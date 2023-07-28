import * as React from "react";

import { ChallengeBar } from "../../Challenges/ChallengeBar";
import { Navbar } from "../../Nav";

interface IPropTypes {
  children: React.ReactNode;
  id: number;
}

const EditorLayout = ({ children, id }: IPropTypes) => {
  return (
    <div className="h-screen text-gray-200 bg-gray-800">
      <Navbar />
      <ChallengeBar id={id} />
      {children}
    </div>
  );
};

export default EditorLayout;
