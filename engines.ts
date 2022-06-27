import { readFileSync } from "fs";

export const getEngines = () => {
  return readFileSync("engines.ts");
};
