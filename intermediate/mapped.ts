type Nullable<T>    = { [K in keyof T]: T[K] | null };
interface User { name: string; age: number }
type Mutable<T>     = { -readonly [K in keyof T]: T[K] };
// type Required<T> = { [K in keyof T]-?: T[K] };

// Conditional types - types-level if:
type IsString<T> = T extends string ? true : false;
type A = IsString<"Hello">; //true
type B = IsString<42>; // false

// infer captures a type variable from a pattern
type ElementOf<T> =  T extends (infer U)[] ? U : never;
type C = ElementOf<number[]>; // number
type D = ElementOf<string[]>; // string

// this is how ReturnType<F> is implemented:
// type ReturnType<F> = F extends (...args: any[]) => infer R ? R : never;

// Distributing over unions - conditionals over a union type apply per-variant
type StringOnly<T> = T extends string ?  T : never;
type E = StringOnly<"a" | 42 | "a">; // "a" | "b"