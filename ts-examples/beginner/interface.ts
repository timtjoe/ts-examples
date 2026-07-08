interface User {
  name: string;
  age: number;
  email?: string; // optional - may be missing
}

const alice: User = { name: "Alice", age: 30 };
//  email is optional, so this valid

// const bob: User = {name: "Bob"};
// TypeError - age is required

// Read-only property
interface Config {
  readonly id: string; //can't be reassigned
  timeout?: number; //optional
  retries: number; //required
}

const c: Config = { id: "c-1", retries: 3 };
// c.id = "c-2"; // TypeError - id is readonly

// Methods
interface Greeter {
  name: string;
  greet(other: string): string;
  farewell: (other: string) => string;
}

// Index signatures - open dictionaries
interface ScoreMap {
  [name: string]: number;
}

const _scores: ScoreMap = {
  alice: 95,
  bob: 80,
};

_scores.carol = 70; // OK - any string key, number value
// _scores.teacher = "John" // TypeError = only number value allowed

// Extending Interfaces
interface Person {
  name: string;
}

interface Employee extends Person {
  department: string;
  salary: number;
}

const e: Employee = {
  name: "Alice",
  department: "Engineering",
  salary: 100_000,
};

// Interface vs Type - which to use?
// both can describe object shapes
interface iUser {
  name: string;
  age: number;
}
type tUser = { name: string; age: number };

// interface supports declaration mergin - if you declare the same interface twice, TypeScript merges the fields. Useful for augmenting library types.
// type supports unions, intersections, primitives, computed types - interface can't
// Convention: use interface for object shapes you might extend later. Use type for union, tuples, mapped types, or simple aliases. Either works for ordinary objects.

type ID = string | number; // union - must use type
type Pair = [number, number | string];
const numTuple: Pair = [1, 2];
const strTuple: Pair = [1, "str"];

// Excess property checking - gotcha

interface Options {url:string;}
function fetch(opts: Options) {/*... */}
// fetch({url: "/x", timeout}); 

