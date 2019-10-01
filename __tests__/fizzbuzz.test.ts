import fizzbuzz from '../src/fizzbuzz';

test('Number', () => {
  expect(fizzbuzz(1)).toBe(1)
})
test('Fizz', () => {
  expect(fizzbuzz(3)).toBe('Fizz')
})
test('Buzz', () => {
  expect(fizzbuzz(5)).toBe('Buzz')
})
test('FizzBuzz', () => {
  expect(fizzbuzz(15)).toBe('FizzBuzz')
})
