import * as React from "react";

import { SnippetCard } from "../SnippetCard";

interface IPropTypes {
  title: string;
  snippets: any[];
}

const SnippetList = ({ title, snippets }: IPropTypes) => {
  return (
    <div>
      <p className="mb-1">{title}</p>
      <ul>
        {snippets.map(({ name }, id) => (
          <SnippetCard key={name} name={name} id={id + 1} />
        ))}
      </ul>
    </div>
  );
};

export default SnippetList;
