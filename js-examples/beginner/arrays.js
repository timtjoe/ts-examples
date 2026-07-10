// Array are ordered list of values
const empty = [];
console.log("=== create and modify array ===")
const fruits = ["apple", "banana", "cherry"];
const mix = [1, "two", 3.0, true, null];
const matrix = [[1, 2], [3, 4]]; //array of arrays
console.log(fruits.length);   // 3
console.log(fruits[0]);      // apple
console.log(fruits[2]);     // cherry
console.log(fruits[10]);    // undefined - silent error!

// Mutating methods (modify in place)
console.log("=== mutating methods ===")
fruits.push("date");        //add to end -> length = 4
console.log(fruits.pop())   //remove + return last
console.log(fruits.unshift("appricot")) //Add to front
console.log(fruits.shift()) //remove + return first
console.log(fruits.splice(1, 2)) // delete two from index one
console.log(fruits.splice(1, 0, "new")) //insert 1 at index "new"
console.log(fruits.sort()) //sort alphabetically in place
console.log(fruits.reverse()) //reverse in place 
fruits[0] = "avocado" // direct assignment

// Non-mutating methods (returns a new array)
console.log("=== non-mutating ===")
let arr = [1,2,3]
console.log(arr.slice(0,2)) // [1,2] - new array - no mutation
console.log(arr.concat(4,5)) //[1,2,3,4,5]
console.log([...arr, 4, 5]) //[1,2,3,4,5] - The spread operator ... is the modern way to copy/concat
console.log([...arr].reverse()) //[3,2,1] - copy first, then reverse
console.log([...arr].sort()) //sorted copy

// Searching 
console.log("=== Searching ===")
console.log(arr.includes(2)) //true
console.log(arr.indexOf(1)) // 1 or -1 if not found
console.log(arr.find(n => n > 1)) // 2 - first match
console.log(arr.findIndex(n => n > 1)) // 1
console.log(arr.some(n => n > 5)) //false - at least one match
console.log(arr.every(n => n > 0)) //true - all match

// Iterating

console.log("=== iterating ===")
// for..of - for the values:
for (const fruit of fruits) console.log(fruit);
// forEach - same idea, callback style:
fruits.forEach(fruit => console.log(fruit));
// With index index:
fruits.forEach((fruit, i) => console.log(i, fruit));
for(const [idx, fruit] of fruits.entries()) console.log(idx, fruit);

// length is mutable!
arr = [...arr, 4,5];
arr.length = 2;
console.log(arr) // [1,2] - trucated