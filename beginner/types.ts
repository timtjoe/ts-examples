// The basic primitives types
let count: number = 0;
let _name: string = "Alice";
let active: boolean = true;
let nothing: null = null;
let missing: undefined = undefined;

// inference - let TypeScript figure it out
let infer_count = 0;
let infer_name = "Alice";
let pi = 3.14;

// Arrays
let scores: number[] = [90, 85, 100];
let names: string[] = ["Alice", "Bob"];
let matrix: number[][] = [
  [1, 2],
  [3, 4],
];

// generic syntax equivalent
let scores2: Array<number> = [90, 85, 100];

// Object types
let user: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};

// Tuples - fixed-length, typed positions
let pair: [string, number] = ["Alice", 30];
pair[0];
pair[1];

// Union types - "this or that"
let id: string | number = 42;
id = "abc";
// id = true

// Type-narrowing to handle case
function format(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id.toString();
}

// Literal types
let _status: "active" | "inactive" | "pending" = "active";
// _status = "foo"

// Unknown - the type-safe any
let input: string = "largefile.json";
let x: unknown = JSON.parse(input);
// x.length;
if (typeof x === "string") {
  x.length;
}

// Void = return nothing
function logIt(msg: string): void {
  console.log(msg);
}

// never = function never returns normally.
function throwError(): never {
  throw new Error("!");
}

// Type Assertion - "trust me"
const el = document.getElementById("my-input") as HTMLInputElement;
el.value;