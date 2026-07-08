const greetings = "hello, world";
// console.log(greetings.length);
// console.log(greetings[0]);
// console.log(greetings[11]);
// console.log(greetings[100]); //undefined - no error

// Strings are immutable
const s = "hello";
s[0] = "H"; // silently does nothing in non-strict mode!
// console.log(s);

// Cannot change a character in place.
const lower = "Hello";
const upper = lower.toUpperCase() //return new string

// Slice - extract substrings
const word = "Javascript is nice."
// console.log(word.slice(0, 13) + '...');
// console.log(word.slice(4));
// console.log(word.slice(-6));
// console.log(word.slice(-6, -2));

// Common string methods
const msg = "  Hello, World!  ";
// console.log(msg);
// console.log(msg.trim());
// console.log(msg.toLowerCase());
// console.log(msg.toUpperCase());
// console.log(msg.replace("World", "JS"));
// console.log(msg.replace("Alice", "World")) //nothing happen
// console.log(msg.replaceAll("l", "L"));
// console.log(msg.includes("World"));
// console.log(msg.startsWith(" Hello"));
// console.log(msg.endsWith("! "));
// console.log(msg.indexOf("World"));
// console.log("a-b-c".split("-").join("/"));
// console.log("abc".repeat(3))

// Iterating characters
for (const ch of "hi") {
  // console.log(ch)
}

// Converting between types
console.log(String(42));
console.log((42).toString());
console.log(String(true));