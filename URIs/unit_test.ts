let failures = 0;
let passed = 0;

type TestFn = () => void | Promise<void>;

async function describe(name: string, fn: TestFn): Promise<void> {
  console.log(`\n${name}`);
  try {
    await fn();
  } catch (e) {
    console.log(`  ✗ ${e}`);
    failures++;
  }
  if (failures > 0) {
    console.log(`\n${passed} passed, ${failures} failed`);
    process.exit(1);
  } else {
    console.log(`\n${passed} passed`);
  }
}

async function it(name: string, fn: TestFn): Promise<void> {
  try {
    await fn();
    console.log(`  ✓ ${name}`);
    passed++;
  } catch (e) {
    console.log(`  ✗ ${name}: ${e}`);
    failures++;
  }
}

const assert = {
  strictEqual(actual: unknown, expected: unknown, message?: string) {
    if (actual !== expected) {
      throw new Error(message ?? `Expected ${expected}, got ${actual}`);
    }
  },
};

const withSubmit = false;

export { describe, it, assert, withSubmit };
