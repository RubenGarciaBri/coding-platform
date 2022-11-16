import * as React from "react";

interface IPropTypes {
  id: number;
}

const ChallengeBar = ({ id }: IPropTypes) => {
  return (
    <div className="text-gray-200 bg-gray-700">
      <div className="px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        Challenge {id}
      </div>
    </div>
  );
};

export default ChallengeBar;
