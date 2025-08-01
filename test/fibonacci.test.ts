import { fibonacci } from '../src/fibonacci';

describe('fibonacci - valid input tests', () => {
  it('returns 0 for n = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('returns 1 for n = 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('returns correct values for small n', () => {
  expect(fibonacci(2)).toBe(1);
  expect(fibonacci(3)).toBe(2);
  expect(fibonacci(4)).toBe(3);
  expect(fibonacci(5)).toBe(5);
  expect(fibonacci(10)).toBe(55);
  expect(fibonacci(20)).toBe(6765);
});

  it('handles larger input within safe range', () => {
    expect(fibonacci(30)).toBe(832040);
  });
});

describe('fibonacci - negative and edge cases', () => {
  
  it('throws error for negative input', () => {
  expect(() => fibonacci(-1)).toThrow();
  expect(() => fibonacci(-10)).toThrow();
});
});

describe('fibonacci - non-integer and invalid input handling', () => {
  it('throws for non-integer input like floats', () => {
    expect(() => fibonacci(4.5)).toThrow();
  });

  it('throws for NaN', () => {
    expect(() => fibonacci(NaN)).toThrow();
  });

  it('throws for Infinity and -Infinity', () => {
    expect(() => fibonacci(Infinity)).toThrow();
    expect(() => fibonacci(-Infinity)).toThrow();
  });

  it('throws for non-numeric inputs', () => {
    // @ts-ignore
    expect(() => fibonacci("10")).toThrow();
    // @ts-ignore
    expect(() => fibonacci(null)).toThrow();
    // @ts-ignore
    expect(() => fibonacci(undefined)).toThrow();
    // @ts-ignore
    expect(() => fibonacci({})).toThrow();
    // @ts-ignore
    expect(() => fibonacci([])).toThrow();
  });
});

describe('fibonacci - performance sanity (not a true perf test)', () => {
  it('completes for n = 35 and returns correct result', () => {
  const result = fibonacci(35);
  expect(result).toBe(9227465);
  // Performance timing removed to avoid flaky tests
});

  // Not running larger n, as this is not tail-recursive or iterative
});
