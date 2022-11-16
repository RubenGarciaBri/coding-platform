import * as React from "react";

import { useRouter } from "next/router";

import { CodeEditor, EditorLayout } from "../../components";

const Index = () => {
  const router = useRouter();
  const [id, setId] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!router.isReady) return;
    setId(Number(router.query.id));
  }, [router]);

  return id ? (
    <EditorLayout id={id}>
      <CodeEditor />
    </EditorLayout>
  ) : null;
};

export default Index;
