import readInput from './readInput';

export function sum(array: number[]) {
  let result = 0;
  array.forEach(i => {
    result += i;
  });
  return result;
}

export function average(array: number[]) {
  if (!array.length) return 0;

  let result = 0;
  array.forEach(i => {
    result += i;
  });
  result = result / array.length;
  return result;
}

export function max(array: number[]) {
  return 0;
}

export function min(array: number[]) {
  return 0;
}
