const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = nums.filter((n) => n % 2 === 0);
const square = nums.map((x) => x * x);
const sum = nums.reduce((acc, x) => acc + x, 0);

console.log(even, square, sum)
const result: number = nums
  .filter((n) => n % 2 === 0)
  .map((n) => n * n)
  .reduce((a, b) => a + b, 0);

  // console.log(result);