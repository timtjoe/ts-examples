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