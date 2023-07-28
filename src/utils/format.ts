import * as Prettier from "prettier";
import parselBabel from "prettier/parser-babel";

const format = (code: string): string => {
  return Prettier.format(code, {
    parser: "babel",
    plugins: [parselBabel],
  });
};

export default format;
