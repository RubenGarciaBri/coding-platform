import * as React from "react";

import Link from "next/link";

interface IPropTypes {
  name: string;
  id: number;
}

const SnippetCard = ({ name, id }: IPropTypes) => {
  return (
    <li>
      <Link
        className="inline-block p-6 bg-gray-300 border border-gray-600 rounded shadow-sm hover:bg-gray-400 text-gray-1100"
        href={`/snippet/${id}`}
      >
        {name}
      </Link>
    </li>
  );
};

export default SnippetCard;
