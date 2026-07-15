// Closure - is a function that remembers the variable of the scope where it was created - even after that scope has finised executing.

// The mental model
function makeAdder(x) {
  return function (y) {
    return x + y; //capture x from outer scope
  }
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add5(3)); //8
console.log(add10(3)); // 10

// Capturing variable from surrounding scope
const names = ["Alice", "Bob", "Carol"];
const greeting = "Hello"
names.forEach(name => console.log(`${greeting} ${name}`));

// Building private state - simulate private members - without class

function createCounter() {
  let count = 0; // private - only accessible via the methods below
  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count,
  }
}

const c = createCounter();
c.increment();
c.increment();
console.log(c.value()) //2
console.log(c.count) //undefined

// Classic loop closure trap
// BUG - what does this print
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100
  )
} //Print 3 3 3

// Use 'let' - Each closure gets it own i
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100
  )
} //Print 3 3 3
