class Person {
  name: string;
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    ((this.surname = surname), (this.age = age));
  }

  getFullname() {
    return `${this.name} ${this.surname}`;
  }
}

export default Person;
