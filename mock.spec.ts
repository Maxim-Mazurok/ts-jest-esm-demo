import { jest } from "@jest/globals";

jest.unstable_mockModule("fs", () => ({
  readFileSync: () => "mocked value",
}));

const { getEngines } = await import("./engines.js");

it("works", () => {
  // Act
  const result = getEngines();

  // Assert
  expect(result).toBe("mocked value");
});
