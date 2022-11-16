import * as React from "react";

import { ChallengeBar } from "../../Challenges/ChallengeBar";
import { Navbar } from "../../Nav";

interface IPropTypes {
  children: React.ReactNode;
  id: number;
}

const EditorLayout = ({ children, id }: IPropTypes) => {
  return (
    <div className="min-h-screen text-gray-200 bg-gray-800">
      <Navbar />
      <ChallengeBar id={id} />
      <div>{children}</div>
    </div>
  );
};

export default EditorLayout;
