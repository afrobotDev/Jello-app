import { describe, it, assert, withSubmit } from "./unit_test";
import { JelloIssueSchema } from "./validation_lib";

await describe("Introducing Zod Schemas", async () => {
  type TestCase = { data: any; expectErr: boolean };

  const runCases: TestCase[] = [
    {
      data: {
        id: "404-not-found",
        title: "Make the 404 page less sad",
      },
      expectErr: false,
    },
    { data: { id: "non-empty-check", title: "" }, expectErr: true },
    { data: { id: 1 }, expectErr: true },
    { data: { title: "Where did my ID go?" }, expectErr: true },
  ];

  const submitCases: TestCase[] = runCases.concat([
    { data: null, expectErr: true },
    { data: undefined, expectErr: true },
    {
      data: {
        id: "500-server-sad",
        title: "Convince PM this is a feature not a bug",
      },
      expectErr: false,
    },
    {
      data: { id: 3.14159, title: "Add more cowbell to the navbar" },
      expectErr: true,
    },
  ]);

  const testCases = withSubmit ? submitCases : runCases;

  for (const { data, expectErr } of testCases) {
    it(`${expectErr ? "should reject" : "should validate"}: ${JSON.stringify(data)}`, () => {
      const result = JelloIssueSchema.safeParse(data);

      if (expectErr) {
        assert.strictEqual(result.success, false);
      } else {
        assert.strictEqual(result.success, true);
        if (result.success) {
          assert.strictEqual(result.data.id, data.id);
          assert.strictEqual(result.data.title, data.title);
        }
      }
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
