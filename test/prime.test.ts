// tests/prime.test.ts
import { isPrime } from '../src/prime';

describe('isPrime function', () => {
  test('returns false for numbers less than or equal to 1', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  test('returns true for known small primes', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
  });

  test('returns false for small non-primes', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(9)).toBe(false);
  });

  test('works for larger prime numbers', () => {
    expect(isPrime(97)).toBe(true);
    expect(isPrime(101)).toBe(true);
  });

  test('works for larger non-primes', () => {
    expect(isPrime(100)).toBe(false);
    expect(isPrime(102)).toBe(false);
  });
});