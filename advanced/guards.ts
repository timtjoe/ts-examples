// A type guard is a runtime check that narrows the type.

// own types.
function isString(x:unknown): x is string {
  return typeof x === 'string';
}

function process(input:unknown) {
  if(isString(input)){
    console.log(input.toUpperCase); // narrowed to string
  }
}

// for discriminated unions - built-in narrowing:
type Shape = | {kind: 'circle'; radius: number} | {kind: 'square'; side: number}

function area(s: Shape): number {
  if(s.kind === 'circle') {
    return Math.PI * s.radius ** 2; // narrowed to circle variant
  }
  return s.side ** 2; // narrowed to square
}

// Custom guards for complex shapes:
interface User {
  name: string;
  age:  number;
}

function isUser(x:unknown): x is User {
  return typeof x === 'object' 
      && x !== null
      && typeof (x as any).name === 'string'
      && typeof (x as any).age === 'number'
}

const input = {
  name: 'John',
  age: 32
}
const data: unknown = JSON.parse("input");
if(isUser(data)) {
  console.log(data.name);
  
}

// asserts keyword - narrows AND throws if the assertion fails:
function assertIsUser(x: unknown): asserts x is User {
  if(!isUser){
    throw new TypeError("not a user");
  }
}

function handle(data:unknown) {
  assertIsUser(data);
  // Past here, data is User - TypeScript knows
  console.log(data.name);
}

// in operator narrowing:
function describe(animal:{name: string} | {species: string}) {
  if ('name' in animal) {
    // narrowed to {name: string}
  } else {
    // narrowed to {species: string}
  }
}

// Exhaustiveness pattern with never:
function newArea(s:Shape): number {
  switch (s.kind) {
    case 'circle':
      return Math.PI * s.radius ** 2;
      case "square": return s.side ** 2;
    default:
      const _exhaustive: never = s ;
      return _exhaustive;
  }
}
