import { expect, test, vi } from "vitest";
import { getEngines } from "../engines.js";

test("works", async () => {
  // Arrange
  vi.mock("node:fs", async () => {
    return {
      ...(await vi.importActual<typeof import("node:fs")>("node:fs")),
      readFileSync: () => `mocked value`,
    };
  });

  // Act
  const result = await getEngines();

  // Assert
  expect(result).toBe("mocked value");
});
