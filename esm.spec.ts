import { getAllNodeVersion } from "./versions";

it("esm", async () => {
  expect(await getAllNodeVersion()).toContain("18.4.0");
});
