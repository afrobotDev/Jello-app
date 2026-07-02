import { describe, it, assert, withSubmit } from "./unit_test.ts";
import { getDomainNameFromURL } from "./dns.ts";

describe("getDomainNameFromURL", () => {
  const runCases = [
    { url: "https://boot.dev/courses/learn-python", expected: "boot.dev" },
    { url: "https://www.google.com/search?q=test", expected: "www.google.com" },
    { url: "http://example.com", expected: "example.com" },
  ];

  const submitCases = runCases.concat([
    {
      url: "https://sub.domain.example.com/path",
      expected: "sub.domain.example.com",
    },
    { url: "https://www.github.com/user/repo", expected: "www.github.com" },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  testCases.forEach(({ url, expected }) => {
    it(`should return ${expected} for URL ${url}`, () => {
      assert.strictEqual(getDomainNameFromURL(url), expected);
    });
  });

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
