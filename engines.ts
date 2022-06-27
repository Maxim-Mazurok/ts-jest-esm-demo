import { readFileSync } from "node:fs";

export const getEngines = () => {
  return readFileSync("engines.ts");
};
