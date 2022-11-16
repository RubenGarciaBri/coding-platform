import * as React from "react";

import Link from "next/link";

interface IPropTypes {
  name: string;
  id: number;
}

const Challenge = ({ name, id }: IPropTypes) => {
  return (
    <li>
      <Link
        className="block w-full px-3 py-2 bg-gray-700 rounded shadow hover:bg-gray-600"
        href={`/challenge/${id}`}
      >
        {name}
      </Link>
    </li>
  );
};

export default Challenge;
