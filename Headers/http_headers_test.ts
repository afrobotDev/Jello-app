import { describe, it, assert, withSubmit } from "./unit_test";
import { getContentType } from "./http_headers";

describe("getContentType", () => {
  type TestCase = {
    headers: Record<string, string>;
    expected: string;
  };

  const runCases: TestCase[] = [
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer token123",
      },
      expected: "application/json",
    },
    {
      headers: { "Content-Type": "text/html", "Accept-Language": "en-US" },
      expected: "text/html",
    },
  ];

  const submitCases = runCases.concat([
    {
      headers: { Authorization: "Bearer token123" },
      expected: "",
    },
    {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "no-cache",
      },
      expected: "application/xml",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (const { headers, expected } of testCases) {
    it("Content-Type is extracted for headers", () => {
      const response = new Response(null, { headers });
      const actual = getContentType(response);
      assert.strictEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
