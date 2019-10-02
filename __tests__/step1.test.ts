import { step1 } from '../src/step1';

test('単語ひとつ', () => {
  expect(step1('hello')).toMatchObject({ hello: 1 });
});

test('単語ふたつ', () => {
  expect(step1('hello world hello')).toMatchObject({ hello: 2, world: 1 });
});

test('漢字', () => {
  expect(step1('尾崎 勇一')).toMatchObject({ 尾崎: 1, 勇一: 1 });
});
