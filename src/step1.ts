// npx ts-node src/hello.ts
import readInput from './readInput';

export function step1(value: string) {
  const result: { [key: string]: number } = {};
  value.split(' ').forEach((val: string) => {
    result[val] = result[val] ? result[val] + 1 : 1;
  });
  return result;
}
