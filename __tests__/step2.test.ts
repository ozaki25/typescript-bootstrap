import { sum, average, max, min } from '../src/step2';

const input = [20, 31, 42, 13, 5, 39];

describe('正常系', () => {
  test('合計', () => {
    expect(sum(input)).toBe(150);
  });

  test('平均', () => {
    expect(average(input)).toBe(25);
  });

  test('最大', () => {
    expect(max(input)).toBe(42);
  });

  test('最小', () => {
    expect(min(input)).toBe(5);
  });
});

describe('異常系', () => {
  test('合計', () => {
    expect(sum([])).toBe(0);
  });

  test('平均', () => {
    expect(average([])).toBe(0);
  });

  test('最大', () => {
    expect(max([])).toBe(null);
  });

  test('最小', () => {
    expect(min([])).toBe(null);
  });
});
