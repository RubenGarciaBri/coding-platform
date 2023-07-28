import * as React from "react";

import { ChallengeList } from "../components/Challenges";
import { DefaultLayout } from "../components/Layouts";
import { challengesData } from "../data";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="mb-4">
        <h1 className="mb-1 text-2xl">Welcome back, Ruben.</h1>
        <p>
          Select from any of the challenges below to start improving your React
          skills
        </p>
      </div>
      <ChallengeList title="Beginner's Path" challenges={challengesData} />
    </DefaultLayout>
  );
}
