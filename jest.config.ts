import { InitialOptionsTsJest } from "ts-jest";

const config: InitialOptionsTsJest = {
  preset: "ts-jest/presets/default-esm",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  resolver: "./resolver.cjs",
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // https://github.com/swc-project/jest/issues/64#issuecomment-1029753225
  },
  clearMocks: true,
};

export default config;
