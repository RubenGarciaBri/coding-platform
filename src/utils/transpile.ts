import { transform } from "sucrase";

const transpile = (code: string): string => {
  try {
    return transform(code, { transforms: ["jsx", "imports"] }).code;
  } catch (e) {
    console.error(e);
    return `Error: ${(e as Error).message}`;
  }
};

export default transpile;
