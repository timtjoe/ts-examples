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

type User = {
  name: string;
  age: number;
};

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; message: string };

// Narrowing with switch
function render(s: State): string {
  switch (s.status) {
    case "idle":
      return "click to load";
    case "loading":
      return "loading...";
    case "success":
      return `${s.data.length} users`;
    case "error":
      return `failed: ${s.message}`;
    default:
      const _exhaustive: never = s;
      throw new Error(`unhandled: ${JSON.stringify(s)}`);
  }
}

// Modeling API responses
type _Response<T> = | {ok: true; data: T} | {ok: false; status: number; error: string}

async function fetchUser(id: number): Promise<_Response<User>>{
  const r = await fetch(`/api/users/${id}`);
  if(!r.ok){
    return {ok: false, status: r.status, error: r.statusText};
  }
  return {ok: true, data: await r.json()};
}

// State machines
// Finit state machines map perfectly:
type Item = {
  id: number,
  name: string,
  price: number
}

type Address = {
  country: string,
  street: string,
  zip: number
}
type Order = 
| {state: 'cart'; items: Item[]}
| {state: 'checkout'; items: Item[]; address: Address; transactionId: string}
| {state: 'paid'; items: Item[]; address: Address; transitionId: string}
| {state: 'shipped'; items: Item[]; address: Address; transitionId: string}

