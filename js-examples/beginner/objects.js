// Objects are unordered list of key->value maps.
// They're how you group related data into a single value.

// Creating objects
const User = {
  name: "Alice",
  age: 30,
  isAdmin: true,
  role: "admin"
}

console.log(User);

// Accessing properties
// Two syntaxes
console.log(User.name); // Alice - dot notation (literal key)
console.log(User["age"]); //30 - bracket notation (any expression)
const key = "name";
console.log(User[key]) // Alice - bracket required for dynamic key

// Adding, updating, removing
User.email = "alice@example.com";
User.age = 31;
delete User.isAdmin;
console.log(User)

// Property shorthand
// When variable name matches the key, you can omit the value:
// const name = "Alice";
// const age = 30;
// const Person = {name, age};

// Destructuring - pull out properties
const { name, age } = User;
console.log(name, age)

// With renaming: 
const { name: user_name } = User;

// With defaults:
const { city = "unknown" } = User;

// Rest:
const { name: n, ...rest } = User;
console.log(n);

// Spread - copy and merge
const base = { a: 1, b: 2 };
const extended = { ...base, c: 3 };
const merged = { ...base, ...{ b: 99 } };
console.log(merged);

// Iteration 
console.log(Object.keys(User));
console.log(Object.values(User))
for (const [k, v] of Object.entries(User)) {
  console.log(k, v)
}

// Methods - functions stored as properties
const counter = {
  count: 0,
  increment() { this.count++; },
  get() { return this.count },
}

counter.increment();
console.log(counter.get());

//print how many distinct word appears
const words = "the quick brown the".split(" ");
const seen = {};
for(const word of words) {
    seen[word] = true;
}

console.log(Object.keys(seen).length)
