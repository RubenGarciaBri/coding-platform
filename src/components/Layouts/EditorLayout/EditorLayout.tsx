import * as React from "react";

// import { ChallengeBar } from "../../Challenges/ChallengeBar";
import { Navbar } from "../../Nav";

interface IPropTypes {
  children: React.ReactNode;
}

const EditorLayout = ({ children }: IPropTypes) => {
  return (
    <div className="h-screen">
      <Navbar />
      {/* <ChallengeBar id={id} /> */}
      {children}
    </div>
  );
};

export default EditorLayout;
