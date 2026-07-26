//* Union described values that could be one or several types.
let id: string | number;
id = 42;
id = "abc";

//* To USE a union, you must narrow - convince the compiler which case you're in

function stringify(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase(); // narrow to string
  }
  return id.toFixed(); // narrowed to number
}

//* Discriminated unions are the killer pattern. Each variant has a unique tag:
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rect"; width: number; height: number };

function area(s: Shape): number {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2;
    case "square":
      return s.side ** 2;
    case "rect":
      return s.width * s.height;
    default:
      const _exhaustive: never = s; // compiler error if Shape isn't fully covered
      return _exhaustive;
  }
}
