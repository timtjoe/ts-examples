type Reverse<T extends any[]> = T extends [infer First, ...infer Rest] ? [...Reverse<Rest>, First] : [];
type A = Reverse<[1, 2, 3]>;
type B = Reverse<['a', 'b']>;

// Length of a tuple at type level:
type Length<T extends any[]> = T['length'];
type three = Length<[1,2,3]>;