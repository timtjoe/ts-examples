// Map - transform each element. 
const nums = [1, 2, 3, 4];
const squared = nums.map(n => n * n);
const labeled = nums.map((n, i) => `${i}: ${n}`);
console.log(labeled)

// filter - keep elements where callback returns truthy
const even = nums.filter(n => n % 2 === 0);
console.log(even);

const words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
const users = [
  { name: "John", active: true, role: "admin", age: 31 },
  { name: "Alice", active: false, role: "user", age: 24 },
  { name: "Bob", active: false, role: "admin", age: 30 },
  { name: "Janice", active: true, role: "user", age: 20 },
]
const long_words = words.filter(w => w.length >= 5);
const active_users = users.filter(u => u.active);
console.log("long words: ", long_words);
console.log("Active Users: ", active_users);

// Reduce - collapse to a single value
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);

// Max value:
const max_value = nums.reduce((max, n) => n > max ? n : max, -Infinity);
console.log("max value: ", max_value);

// Word count:
const total_words = words.reduce((counts, w) => {
  counts[w] = (counts[w] || 0) + 1;
  return counts;
}, {});

console.log("Total words: ", total_words);

// Group by:
const user_groups = users.reduce((groups, user) => {
  (groups[user.role] ||= []).push(user);
  return groups;
}, {})

console.log("User groups: ", user_groups);

// Pipelines - chain theme
const average_age = users
  .filter(u => u.active)
  .map(u => u.age)
  .reduce((sum, a) => sum + a, 0);
//average age of active users in one expression
console.log("average age: ", average_age);
