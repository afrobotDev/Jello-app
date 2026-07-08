import { describe, it, assert, withSubmit } from "./unit_test";
import { validateIssue } from "./runtime_problem";

await describe("Manual Runtime Validation", async () => {
  type TestCase = { data: any; expectErr: boolean };

  const runCases: TestCase[] = [
    {
      data: { id: "42", title: "Answer to the Ultimate Question" },
      expectErr: false,
    },
    { data: { id: 420, title: "Test" }, expectErr: true },
    { data: { id: "Missing Title" }, expectErr: true },
    { data: { title: "Missing ID" }, expectErr: true },
    { data: "not an object", expectErr: true },
  ];

  const submitCases = runCases.concat([
    { data: null, expectErr: true },
    { data: undefined, expectErr: true },
    { data: { id: "24601", title: "The Miserable" }, expectErr: false },
  ]);

  const testCases = withSubmit ? submitCases : runCases;

  for (const { data, expectErr } of testCases) {
    await it(`${expectErr ? "should reject" : "should validate"}: ${JSON.stringify(data)}`, () => {
      if (expectErr) {
        assert.throws(() => validateIssue(data));
      } else {
        const result = validateIssue(data);
        assert.strictEqual(result.id, data.id);
        assert.strictEqual(result.title, data.title);
        assert.strictEqual(typeof result.id, "string");
        assert.strictEqual(typeof result.title, "string");
      }
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
