import { describe, it, assert, withSubmit } from "./unit_test";
import { fetchJelloIssue, type JelloIssue } from "./schemas_n_inference";

await describe("Using Zod Schemas and Type Inference", async () => {
  await it("should demonstrate type inference and API fetching", () => {
    const testIssue: JelloIssue = {
      id: "legacy-refactor-123",
      title: "Refactor the legacy code no one wants to touch",
      status: "TODO",
    };

    assert.strictEqual(typeof testIssue.id, "string");
    assert.strictEqual(typeof testIssue.title, "string");
  });

  await it("should fetch issues from API", async () => {
    const issues = await fetchJelloIssue();

    assert.strictEqual(Array.isArray(issues), true);
    assert.strictEqual(issues.length > 0, true);

    const firstIssue: JelloIssue = issues[0];
    assert.strictEqual(typeof firstIssue.id, "string");
    assert.strictEqual(typeof firstIssue.title, "string");
    assert.strictEqual(typeof firstIssue.status, "string");
    assert.strictEqual("estimate" in firstIssue, false);
  });

  if (withSubmit) {
    await it("should fetch issues from API", async () => {
      const issues = await fetchJelloIssue();

      assert.strictEqual(Array.isArray(issues), true);
      assert.strictEqual(issues.length > 0, true);

      const secondIssue: JelloIssue = issues[1];
      assert.strictEqual(typeof secondIssue.id, "string");
      assert.strictEqual(typeof secondIssue.title, "string");
      assert.strictEqual(typeof secondIssue.status, "string");
      assert.strictEqual("estimate" in secondIssue, false);
    });
  }

  if (!withSubmit) {
    console.log("- Skip: 1 test case(s) for submit");
  }
});
