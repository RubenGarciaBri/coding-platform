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
        className="block w-full px-3 py-2 bg-gray-300 border border-gray-600 rounded shadow-sm hover:bg-gray-400 text-gray-1100"
        href={`/challenge/${id}`}
      >
        {name}
      </Link>
    </li>
  );
};

export default Challenge;
