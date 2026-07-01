import { describe, it, assert, withSubmit } from "./unit_test.ts";
import { fetchIPAddress } from "./web_address.ts";

await describe("fetchIPAddress", async () => {
  const runCases = [{ url: "one.one.one.one", expected: ["1.1.1.1", "1.0.0.1"] }];
  const submitCases = runCases.concat([]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (const { url, expected } of testCases) {
    await it(`URL ${url}, should return one of expected IPs`, async () => {
      const actual = await fetchIPAddress(url);
      const matches = expected.some((ip) => ip === actual);
      assert.strictEqual(matches, true, `expected ${JSON.stringify(actual)} to match an IP`);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
