export function describe(name: string, fn: () => void): void {
  console.log(`\n${name}`);
  fn();
}

export function it(name: string, fn: () => void): void {
  try {
    fn();
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.log(`  ✗ ${name}`);
    if (err instanceof Error) {
      console.log(`    ${err.message}`);
    }
  }
}

function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== typeof b) return false;

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  if (typeof a === "object" && typeof b === "object") {
    const aKeys = Object.keys(a as Record<string, unknown>);
    const bKeys = Object.keys(b as Record<string, unknown>);
    if (aKeys.length !== bKeys.length) return false;
    for (const key of aKeys) {
      if (!deepEqual((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key]))
        return false;
    }
    return true;
  }

  return false;
}

export const assert = {
  strictEqual(actual: unknown, expected: unknown): void {
    if (actual !== expected) {
      throw new Error(`Expected "${expected}", got "${actual}"`);
    }
  },

  deepEqual(actual: unknown, expected: unknown): void {
    if (!deepEqual(actual, expected)) {
      throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
    }
  },

  throws(fn: () => void, expected: string): void {
    try {
      fn();
    } catch (error) {
      if (error instanceof Error) {
        if (error.message !== expected) {
          throw new Error(`Expected "${expected}", got "${error.message}"`);
        }
        return;
      }
      throw new Error(`Expected "${expected}", got unknown error`);
    }
    throw new Error(`Expected throw, but no error was thrown`);
  },
};

export const withSubmit: boolean = true;
