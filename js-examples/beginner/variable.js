const fruits = ["apple", "banana"];
// Object.freeze(fruits) //Make object immutable
fruits.push("cherry");
console.log(fruits);

// fruits = [] // TypeError - reassignment forbidden ((

// Block scope
if (true) {
  const message = "hi";
  console.log(message);
}

// console.log(message) //RefereceError: message is not defined

//* Why we avoid war 
function bug() {
  if (true) {
    var leaky = "hi"
  }
  console.log(leaky)
}

// Convention: camelCase for variables and functions, PascalCase for classes, UPPER_SNAKE_CASE for true constants
const userName = "Alice";
const MAX_RETRIES = 3;
class BankAccount { };

