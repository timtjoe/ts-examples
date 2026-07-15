// Scope

{
  let x = 20;
  var y = 30;
}

// console.log(x)
console.log(y)

// Hoisting
foo() // ok - function declarations are hoisted
function foo() {return 1}

bar() // x -reference error
const bar = () => 2;