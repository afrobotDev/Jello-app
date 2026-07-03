import { describe, it, assert, withSubmit } from "./unit_test";
import { getMailtoLinkForEmail } from "./the_protocol";

describe("getMailtoLinkForEmail", () => {
  const runCases = [
    {
      email: "wayne.lagner@dev.boot",
      expected: "mailto:wayne.lagner@dev.boot",
    },
    {
      email: "heckmann@what.de",
      expected: "mailto:heckmann@what.de",
    },
  ];
  const submitCases = runCases.concat([
    {
      email: "a.liar@pants.fire",
      expected: "mailto:a.liar@pants.fire",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (const { email, expected } of testCases) {
    it(`mailto link created for ${email}`, () => {
      const actual = getMailtoLinkForEmail(email);
      assert.strictEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
