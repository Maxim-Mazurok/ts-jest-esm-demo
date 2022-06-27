import { expect, test, vi } from "vitest";
import { getEngines } from "../engines.js";
import { readFileSync } from "node:fs";

// Arrange
vi.mock("node:fs", async () => {
  return {
    ...(await vi.importActual<typeof import("node:fs")>("node:fs")),
    readFileSync: vi.fn().mockReturnValue(`mocked value`),
  };
});

test("works", async () => {
  // Act
  const result = getEngines();

  // Assert
  expect(result).toBe("mocked value");
  expect(readFileSync).toHaveBeenCalled();
});
