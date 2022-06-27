import { getAllNodeVersion } from "./versions.js";

it("esm", async () => {
  expect(await getAllNodeVersion()).toContain("18.4.0");
});
