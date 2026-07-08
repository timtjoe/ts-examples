// Repetition is what makes computers powerful.

// The classic for loop
for (let i = 1; i <= 5; i++) {
  console.log(i)
}

console.log("----")
// While - repeat until condition is false
// Use when the iteration count isn't known up front.
let n = 16;
while (n > 1) {
  n = Math.floor(n / 2);
  console.log(n)
}

// Do...While - runs at least once
// Condition is checked AFTER the body.
// let answer;
// do {
//   answer = ask();
// } while (!isValid(anwer));

// for...of - iterate values of an iterable
// Works on arrays, strings, Sets, Maps, generators. This is the modern way to iterate an array's vlaues
const langs = ["js", "go", "rust"];
for (const lang of langs) {
  console.log(lang);
}

// Practice 
/**
 * Sum 1 to N 
 * 
 * Read a positive N. Print the sum of all integers from 1 to N inclusive.
 * for N = 5, that's is 1+2+3+4+5 = 15
 */

// const n = 5;
let sum = 0;
for(i = 1; i <= 5; i++) {
  sum += i;
}

console.log(`Sum: N = 5 = ${sum}`)

// Using for...of to get both index and value of an array
const arr = [1, 2, 3, 4];
for(const [i, v] of arr.entries()) {
  console.log(`index: ${i} value: ${v}`)
}