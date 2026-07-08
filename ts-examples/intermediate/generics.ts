// Generics parameterize types over types

function firstOrDefault<T>(list: T[], fallback: T) {
  return list.length > 0 ? list[0] : fallback;
}

const n = firstOrDefault([1, 2, 3], 0);
const s = firstOrDefault<string>([], "default");

console.log(n, s);

// Generic classes:
class Box<T> {
  constructor(public value: T) {}
  map<U>(f: (x: T) => U): Box<U> {
    return new Box(f(this.value));
  }
}

const b = new Box(5).map((n) => n * 2).map((n) => `value: ${n}`);
console.log(typeof b);

// Constraints - restrict T to types with certain shape:
interface lengthy {length: number}

function longest<T extends lengthy>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

console.log(longest("hello", "hi"))
console.log(longest([1,2,3], [4]))
