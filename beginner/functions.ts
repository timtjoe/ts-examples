// Annotating function declarations
function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;

// Optional parameters & default value
function greet(name: string, greetings: string = "Hello") {
  return `${greetings}, ${name}`;
}

console.log(greet("Alice"));
console.log(greet("Bob", "Howdy"));

// reset parameters
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

console.info(sum(1, 2, 3)); //6

// Function-type alias
type Predicate = (n: number) => boolean;

const isPositive: Predicate = (n) => n > 0;
const isEven: Predicate = (n) => n % 2 === 0;

// Using function types in interfaces
interface EventHandler {
  onClick(e: MouseEvent): void;
  onSubmit: (data: FormData) => boolean;
}

// Return void vs undefined
function logIt(msg: string): void {
  console.log(msg);
  //returning is optional
}

// never for impossible return
function throwError(msg: string): never {
  throw new Error(msg)
}

function loopForever():never {
  while (true){}
}

// Function overload (briefly)
function parse(input:string):number;
function parse(input: string[]): number[];
function parse(input:string | string[]): number | number[] {
  return Array.isArray(input) ? input.map(Number) : Number(input)
}

console.log(parse("42")); // typed as number
console.log(parse(["1", "2"])) // typed as number[]