import { step1 } from '../src/step1';

test('単語ひとつ', () => {
  expect(step1('hello')).toMatchObject({ hello: 5 });
});

test('単語ふたつ', () => {
  expect(step1('hello world')).toMatchObject({ hello: 5, world: 5 });
});
