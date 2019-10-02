// npx ts-node src/hello.ts
import readInput from './readInput';

export function step1(value: string) {
  return { [value]: value.length };
}

(async () => {
  let inputNumber;
  do {
    inputNumber = await readInput('数字を入力してください? ');
    inputNumber = parseInt(inputNumber);
  } while (Number.isNaN(inputNumber));
  const results = [];
  for (let i = 1; i <= inputNumber; i++) {
    results.push(step1(String(i)));
  }
  console.log(results.join(', '));
})();
