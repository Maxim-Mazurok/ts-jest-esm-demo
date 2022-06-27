import { jest } from "@jest/globals";

let mockedValue: string;

jest.unstable_mockModule("node:fs", () => ({
  readFileSync: () => mockedValue,
}));

it("works", async () => {
  // Arrange
  mockedValue = "mocked value";

  const { getEngines } = await import("./engines.js");

  // Act
  const result = getEngines();

  // Assert
  expect(result).toBe("mocked value");
});

it("works as well", async () => {
  // Arrange
  mockedValue = "another value";

  const { getEngines } = await import("./engines.js");

  // Act
  const result = getEngines();

  // Assert
  expect(result).toBe("another value");
});
