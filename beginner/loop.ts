const nums: number[] = [1, 2, 3, 4, 5];

// prefer when need both index and value
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// prefer for values
for (const value of nums) {
  console.log(value);
}

// prefer for iterating keys
for (const key in nums) {
  if (!Object.hasOwn(nums, key)) continue;
  const element = nums[key];
  console.log(element, "key");
}

for (let key in nums) {
  key = key.toString();
  console.log(key);
}

// here is throwing error because i declared sum in ./functions.ts
// why is that i don't know. i though function are scoped to their file
let _sum: number = 0;
nums.forEach((n, i) => {
  _sum += n;
});

// destructure index and value with .entries
for(const [index, value] of nums.entries()){
  console.log(index, " pairs ", value)
}

console.log(sum);
