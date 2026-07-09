/**
 * Functions are reusable blocks of code that take input (parameters) and return an output
 * 
 * Reasons to use a function
 * 1 - reuse (call it many times)
 * 2 - abstraction (give a meaningful name to a multi-step operation)
 * 3 - isolation (variables inside don't leak out)
 */

// Examples
function add(a, b) {
  return a + b;
}

console.log(add(3, 4)) // 7

// Function expressions - assign to a variable
const adder = function (a, b) {
  return a + b;
}

// pass as argument 
function arg(func) {
  return func(2, 3);
}
console.log(arg(adder)) // 5

// return a function 
function returnFunc() {
  return (a, b) => a + b;
}

const makeSum = returnFunc();
console.log(`make sum: ${makeSum(4, 5)}`) // 9

// Parameters and arguments
function greet(name, greeting) {
  return `${greeting}, ${name}!`;
}

console.log(greet("Alice", "Hello")) //Hello, Alice!
console.log(greet("Bob")) // "undefined, Bob!" - !!

// Rest parameters - variable-length args
// collects all remain arguments into an array
function average(...nums) {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}
console.info(average(1, 2, 3, 4, 5)) //3

// Spread at the call site
const args = [3, 7, 2, 9, 5];
console.log(Math.max(...args))

// implementing a max function
function findMax(values) {
  let max_value = values[0];
  //traverse
  for (const value of values) {
    //compare
    if (value > max_value) max_value = value;
  }
  //return
  return max_value
}

console.log(findMax(args)) //not working.

// Practice
/**
 * Square It
 * Define a function square(n) that returns n * n. print its square.
 */
function square(n) {
  return n * n;
}

console.log(square(1117)) //1247689

// Arrow functions
