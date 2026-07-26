// Union types
function format(input: string | number): string {
  if (typeof input === "string") return input.toUpperCase();
  return input.toFixed(2);
}

console.log(format("hello"));
console.log(format(3.14159));

// String literal unions
type Direction = "north" | "south" | "east" | "west";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

function move(dir: Direction): void {
  // ...
}

move("north");
// move("up")

// Intersection types
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged;

const p: Person = { name: "Ada", age: 36 }; //Must have BOTH

// Useful for combining behaviors
type Loggable = { log(msg: string): void };
type Serializable = { toJSON(): string };

function process(item: Loggable & Serializable) {
  item.log("processing");
  return item.toJSON();
}

// Discriminated unions - the killer pattern
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "triangle"; base: number; height: number };

function area(s: Shape): number {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2;
    case "square":
      return s.side ** 2;
    case "triangle":
      return 0.5 * s.base * s.height;
  }
}

console.log(area({ kind: "circle", radius: 2 }));

// Result types (Rust-influenced)
type Result<T> = { ok: true; value: T } | { ok: false; error: string };
function parseAge(s: string): Result<number> {
  const n = parseInt(s);
  if (isNaN(n)) return { ok: false, error: "No a Number" };
  if (n < 0) return { ok: false, error: "negative" };
  return { ok: true, value: n };
}

const r = parseAge("42");
if (r.ok) {
  console.log(r.value);
} else {
  console.log(r.error);
}
