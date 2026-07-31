// if T is assignable to string
type isString<T> = T extends string ? true : false;
type isNumber<T> = T extends number ? true : false;

type A = isString<"hi">; // true
type B = isString<42>; // false
type C = isString<string>; // true

// useful for branching
type Stringable<T> = T extends number | boolean | string ? string : never;

// Distribution over unions
type toArray<T> = T extends any ? T[] : never;
type D = toArray<string | number>;

// disable distribution by using wrap
type toArray2<T> = [T] extends [any] ? T[] : never;

// built-in conditionals

// Exclude from T those types that are assignable to U
type WithoutString = Exclude<string | number | boolean, string>;
// Extract from T those types that are assignable to U
type OnlyString = Extract<string | number | boolean, string>;
// Exclude null and undefined from T
type defined = NonNullable<string | null | undefined>;

// Infer - capture types within a conditions
type ReturnTypes<T> = T extends (...args: any[]) => infer R ? R : never;
type E = ReturnTypes<() => string>;
type F = ReturnTypes<(x: number) => boolean>;
type G = ReturnTypes<typeof Math.max>;

// Get the parameters of a function:
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

// Get the elements type of any array:
type ElementOf<T> = T extends (infer E)[] ? E : never;
type N = ElementOf<Number>; // number

// Unwrap a Promise:
type Awaited<T> = T extends Promise<infer U> ? U : T;
type X = Awaited<Promise<string>>; //string

// First and rest of typle:
type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never;
type Tail<T extends any[]> = T extends [any, ...infer R] ? R : [];

// Real-world example - typed config

type HttpHandler<T> = T extends `GET ${string}`
  ? { get: () => Response }
  : T extends `POST ${string}`
    ? { post: (body: any) => Response }
    : never;

type GetHandler   = HttpHandler<'GET    /users'>;   //   {get: ...}
type PostHandler  = HttpHandler<'Post   /users'>;   //  {post: ...}
type Bad          = HttpHandler<'PATCH  /users'>;   //  never