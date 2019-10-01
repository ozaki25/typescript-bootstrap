import { ReadLine, createInterface } from 'readline'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const readInput = (question: string) => {
  return new Promise<string>(resolve => {
    rl.question(question, answer => {
      resolve(answer);
      rl.close();
    });
  });
};

export default readInput;
