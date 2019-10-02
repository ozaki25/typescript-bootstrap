import { step1 } from '../src/step1';

test('単語ひとつ', () => {
  expect(step1('hello')).toMatchObject({ hello: 5 });
});

test('単語ふたつ', () => {
  expect(step1('hello world')).toMatchObject({ hello: 5, world: 5 });
});

test('漢字', () => {
  expect(step1('尾崎 勇一')).toMatchObject({ 尾崎: 2, 勇一: 2 });
});
