// Arrays are typed sequences
const nums: number[] = [1, 2, 3];
nums.push(4);
const doubled: number[] = nums.map(n => n * 2);
const total: number = nums.reduce((a, b) => a + b, 0);

// Tuples are fixed-length, mixed-type arrays
const point: [number, number] = [3, 4];
const entry: [string, number] = ["score", 95];
const [char, val] = entry; // destructure with type inference