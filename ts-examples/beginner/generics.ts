// The motivating problem

// Wrong: returns any - caller loses type info
function _first(arr: any[]): any {
  return arr[0];
}

const n = first([1, 2, 3]); //n: any - not number!
// n.foo(); // no error, but crash at runtime

// Solving the above with Generics
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(first([1, 2, 3]));
console.log(first(["a", "b"]));

// Type parameters - <T>
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

console.log(pair("Alice", 30)); //p: [string, number]. type infered based on how the function is called.

// Generic interfaces
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: "hi" };

// Generic constraints - extends
// Sometimes you need T to have certain shape:
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

console.log(longest("hello", "hi")); // OK - strings have length
console.log(longest([1, 2, 3], [4])); // OK - arrays have length
// console.log(longest(42, 5)) // X TypeError - numbers don't have length

// Default type parameters
interface ApiResponse<T = unknown> {
  status: number;
  data: T;
}

type User = {
  name: string; 
  age: number;
}

const user: User = {name: "Alice", age: 30}

const raw: ApiResponse = {status: 200, data: "anything"};
const typed: ApiResponse<User> = {status: 200, data: user};

// Generic classes: let you build typed data structures once.

class Stack<T>{
  private items: T[] = [];
  push(item: T): void {this.items.push(item);}
  pop(): T | undefined {return this.items.pop();}
  peek(): T | undefined {return this.items[this.items.length - 1]}
}

const s = new Stack<number[]>();
s.push([1, 2]);
s.push([2, 3]);
const last = s.peek(); // last: number | undefined
console.log(last);