// Decorators add metadata or behavior to classes, methods, properties, and parameters at definition time.

// Stage-3 decorators (TS 5.0)

// A class method decorator:

function logged(
  target: (this: any, ...args: any) => any,
  context: ClassMemberDecoratorContext,
): typeof target {
  return function (...args: any[]) {
    console.log(`calling ${String(context.name)} with`, args);
    const result = target.apply(this, args);
    console.log(`required`, result);
    return result;
  };
}

class Calculator {
  @logged
  add(a: number, b: number): number {
    return a + b;
  }
}

new Calculator().add(2, 3);

// class decorator
function sealed<T extends new (...args: any[]) => any>(
  target: T,
  _context: ClassDecoratorContext,
): T {
  Object.seal(target);
  Object.seal(target.prototype);
  return target;
}

@sealed
class Frozen {
  /*...*/
}

// Field decorator
function lowercase(
  _value: undefined,
  context: ClassFieldDecoratorContext,
): (this: any, value: string) => string {
  return function (value: string) {
    return value.toLowerCase();
  };
}

class Email {
  @lowercase
  address: string;
  constructor(addr: string) {
    this.address = addr;
  }
}

new Email("Ada@Example.COM").address; //'ada@example.com

// Decorator factories - adding parameters

function min(limit: number) {
  return function (target: any, context: ClassFieldDecoratorContext) {
    return function (value: number) {
      if (value < limit)
        throw new RangeError(`${String(context.name)} < ${limit}`);
      return value;
    };
  };
}

class Order {
  @min(0)
  quantity: number;
}

// context.addInitializer lets a decorator register code to run once per instance, after construction
function bound<T extends (...args: any[]) => any>(
  method: T,
  context: ClassMethodDecoratorContext,
) {
  context.addInitializer(function () {
    (this as any)[context.name] = method.bind(this);
  });
}

class Counter {
  count = 0;
  @bound
  increment(){
    this.count++;
  }
}

const c = new Counter();
const inc = c.increment; //detached
inc(); // still updates c.count - bound this
