function swap(a: number, b: number): number[] {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}

const a = 5;
const b = 6;

console.log(swap(a, b));
