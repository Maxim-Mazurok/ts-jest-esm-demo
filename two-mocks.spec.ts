import { jest } from "@jest/globals";

let mockedValue: string;

jest.unstable_mockModule("node:fs", () => ({
  readFileSync: jest.fn().mockImplementation(() => mockedValue),
}));

const { readFileSync } = await import("node:fs");
const { getEngines } = await import("./engines.js");

it("works", async () => {
  // Arrange
  mockedValue = "mocked value";

  // Act
  const result = getEngines();

  // Assert
  expect(result).toBe("mocked value");
  expect(readFileSync).toHaveBeenCalledTimes(1);
});

it("works as well", async () => {
  // Arrange
  mockedValue = "another value";

  const { getEngines } = await import("./engines.js");

  // Act
  const result = getEngines();

  // Assert
  expect(result).toBe("another value");
  expect(readFileSync).toHaveBeenCalledTimes(1);
});
