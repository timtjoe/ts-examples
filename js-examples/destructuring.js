// Array destructuring - unpack array elements into variables
const [a, b, c] = [1, 2, 3];
console.log(a, b, c);

const [first, , third, , fifth] = [10, 20, 30, 50, 60]; //skip 
console.log(first, third, fifth);

const [x, y = 5] = [1]; //default value
console.log(x, y);

// Object destructiring - unpacking by property name
const user = { name: "Ada", age: 36, city: 'London' };
const { name, age } = user;
console.log(name, age);

const { name: user_name } = user; //rename
console.log(user_name)

const { country = 'Unknown' } = user; //default
console.log(country);

const { address: { street } = {} } = user; //safe-extract nested 
console.log(street);

// Function parameter destructuring - is huge for option objects
function createUser({ name, age = 36, role = "user" }) {
  return { name, age, role }
}

const new_user = createUser({ name: "Ada" });
console.log(new_user);

// Spread (...) - expand into pieces - for function arguments:
const nums = [1, 2, 3];
console.log(Math.max(...nums))

// for array literals - concatenation, copying
const new_a = [1, 2];
const new_b = [3, 4];
const combined = [...new_a, ...new_b];
const withInsert = [0, ...new_a, 99, ...new_b];
const copy = [...new_a];

// Fo object literal - merging:
const defaults = { theme: 'dark', size: 'md' };
const userPerfs = { size: 'lg' };
const merged = { ...defaults, ...userPerfs };
console.log(merged); // - userPerfs wins (later)

// Rest (...) - collect into one

function sum(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2, 3, 4)); //10

// Collect remaining elements/props
const [new_first, ...rest] = [1, 2, 3, 4];
console.log(first, rest);
const {new_name, ...others} = { name: 'Ada', age: 26, city: 'London' };
console.log(others);


// COMMON PATTERN
//Immutable updates (React, Redux, etc):
const state = {name: 'Ada', age: 36};
const updated = {...state, age: 37};
console.log(updated);

// removeing a key
const {password, ...safeUser} = user;