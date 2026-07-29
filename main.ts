export {};

// TODO: Define type Tail<T extends any[]> that returns T without its first element
type Tail<T extends any[]> = T extends [any, ...infer Rest] ? Rest : never;

type Nums = [1, 2, 3, 4, 5];
type T = Tail<Nums>;

// TODO: build const t: T = [2, 3, 4, 5] to prove it type-checks, then print t.join(" ")
const t: T = [2, 3, 4, 5];
console.log(t.join(' '));
