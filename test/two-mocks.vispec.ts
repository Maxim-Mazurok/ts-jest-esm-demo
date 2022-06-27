import { expect, test, vi } from "vitest";
import { getEngines } from "../engines.js";

let mockedValue: string;
vi.mock("node:fs", async () => {
  return {
    ...(await vi.importActual<typeof import("node:fs")>("node:fs")),
    readFileSync: () => mockedValue,
  };
});

test("works", () => {
  // Arrange
  mockedValue = "mocked value";

  // Act
  const result = getEngines();

  // Assert
  expect(result).toBe("mocked value");
});

test("works as well", () => {
  // Arrange
  mockedValue = "another value";

  // Act
  const result = getEngines();

  // Assert
  expect(result).toBe("another value");
});
