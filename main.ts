type ReadOnly<T> = {readonly [K in keyof T]: T[K]}

interface Counter {
  count: number;
  max: number;
}

// const c: ReadOnly<Counter> = { count: 0, max: 10 };
const c: Counter = { count: 0, max: 10 };
console.log(JSON.stringify(c));
