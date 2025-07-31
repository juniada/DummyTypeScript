import { fibonacci } from '../src/fibonacci';

describe('fibonacci', () => {
  it('should return 0 for n = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('should return 1 for n = 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('should return 1 for n = 2', () => {
    expect(fibonacci(2)).toBe(1);
  });

  it('should return 2 for n = 3', () => {
    expect(fibonacci(3)).toBe(2);
  });

  it('should return 3 for n = 4', () => {
    expect(fibonacci(4)).toBe(3);
  });

  it('should return 5 for n = 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  it('should return correct value for a larger n (e.g., n = 10)', () => {
    expect(fibonacci(10)).toBe(55);
  });

  it('should return correct value for a larger n (e.g., n = 20)', () => {
    expect(fibonacci(20)).toBe(6765);
  });
});
