import * as React from "react";

import Challenge from "../Challenge/Challenge";

interface IPropTypes {
  title: string;
  challenges: any[];
}

const ChallengeList = ({ title, challenges }: IPropTypes) => {
  return (
    <div>
      <p className="mb-1">{title}</p>
      <ul>
        {challenges.map(({ name }, i) => (
          <Challenge key={name + i} name={name} id={i} />
        ))}
      </ul>
    </div>
  );
};

export default ChallengeList;
