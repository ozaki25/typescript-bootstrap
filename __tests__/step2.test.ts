import { sum, average, max, min } from '../src/step2';

const input = [20, 31, 42, 13, 5, 39];

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
