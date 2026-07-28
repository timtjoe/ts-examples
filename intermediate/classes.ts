"strict";

class BankAccount {
  public owner: string;
  private balance: number;
  protected accountNumber: string;
  readonly createdAt: Date;

  constructor(owner: string, accountNumber: string) {
    this.owner = owner;
    this.accountNumber = accountNumber;
    this.balance = 0;
    this.createdAt = new Date();
  }

  deposit(amount: number): void {
    if (amount > 0) this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

// Declare and assign in one line:
class Point {
  constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}
}

const p = new Point(3, 4);
console.log(p.x);

// Inheritance and super
class Animal {
  constructor(public name: string) {}

  describe(): string {
    return `${this.name} is an animal`;
  }
}

class Dog extends Animal {
  constructor(
    name: string,
    public breed: string,
  ) {
    super(name);
  }

  describe(): string {
    return `${this.name} is a ${this.breed}`;
  }

  parentDescribe():string {
    return super.describe(); //call parent version
  }
}

// Abstract classes

abstract class Shape {
  abstract area(): number;

  describe(): string {
    return `area: ${this.area()}`
  }
}

class Circle extends Shape {
  constructor(private radius: number){
    super();
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }

}
// const s = new Shape(); //compile error
const d = new Circle(5);
console.log(d.describe());

// implementing interfaces
interface Greetable {
  greet(): string;
}

class User implements Greetable {
  constructor(private name: string){}
  greet(): string {
    return `Hi, ${this.name}`;
  }
}

// Static members
class IDGenerator {
  private static nexId = 0;
  
  static getId(): number {
    return ++IDGenerator.nexId;
  }
}
