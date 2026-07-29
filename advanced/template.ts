// Template literal types

type Greeting = `hello, ${string}`;

const a: Greeting = 'hello, world'; // OK
// const b: Greeting = 'hi there';     // Error

// The placeholder can be specific:
type Color        = 'red' | 'green' | 'blue';
type HexColor     = `#${string}`;
type CssVariable  = `--${string}`;

type EventName        = `on${Capitalize<string>}`;
const evt: EventName  = 'onClick'; 

// Combinatorial expansion - string unions multiply:
type Verb       = 'get' | 'set' | 'delete';
type Resource   = 'user' | 'post' | 'comment';
type Action     = `${Verb}_${Resource}`;
// 'get_user' | 'get_post' | 'get_comment' | 'set_user' | ...(9 combinations)

// Built-in string transformations:
// Uppercase<T>, Lowercase<T>, Capitalize<T>, Uncapitalize<T>

// Pattern matching with infer

type HttpMethod<T> = T extends `${infer M} ${string}` ? M : never;
type A  = HttpMethod<'GET /user'>; // 'GET'
type B  = HttpMethod<'POST /api'>; // 'POST'
// The infer M captures the part before the space.

// Practical use case - typed event names:
type EventMap = {
  click: {x:    number; y: number};
  hover: {id:   string};
  keyup: {key:  string};
}

type Handler<E extends keyof EventMap> = (event: EventMap[E]) => void;
function on<E extends keyof EventMap>(name: E, handler: Handler<E>) {
  // ...
}

on('click', e => console.log(e.x, e.y))      // typed
on('hover', e => console.log(e.id));         // typed
// on('unknown', () => {});                  // ERROR - not a key