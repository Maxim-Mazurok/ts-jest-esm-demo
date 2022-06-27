import { jest } from "@jest/globals";

jest.unstable_mockModule("node:fs", () => ({
  readFileSync: jest.fn().mockReturnValueOnce("mocked value"),
}));

const { readFileSync } = await import("node:fs");
const { getEngines } = await import("./engines.js");

it("works", () => {
  // Act
  const result = getEngines();

  // Assert
  expect(result).toBe("mocked value");
  expect(readFileSync).toHaveBeenCalledTimes(1);
  expect(readFileSync).toHaveBeenCalledWith("engines.ts");
});
