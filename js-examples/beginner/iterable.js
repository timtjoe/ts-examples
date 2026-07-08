/** 
 * An iterable is an object that knows how to provide its values one at a time.
 * It can be looped over using constructs like for...of
 * 
 * An object is iterable if it defines its iteration behaviors, such as what values are looped over in a for...of construct. To be iterable, an object must implement the [Symbol.iterator]() method. 
*/

// Example: Built-in Iterable
const arr = [10, 20, 30];
for (const num of arr) {
  console.log(num)
}

// Example: Custom Iterable
const Iterable = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {

    let current = this.from;
    const last = this.to;

    return {
      next() {
        if (current <= last) {
          // value: The current value in the sequence
          // done: true when the sequence is finished, otherwise false.
          return { value: current++, done: false }
        } else {
          return { done: true }
        }
      }
    }
  }
}

// Create an Iterator 
function makeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let IterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        IterationCount++;
        return result;
      }
      return { value: IterationCount, done: true };
    }
  }
  return rangeIterator
}

const iter = makeIterator(1, 10, 2);
let result = iter.next();
while (!result.done) {
  console.log(result.value);
  result = iter.next();
}

console.log("Iterated over sequence of size:", result.value);

/** Using generator function
 * Define iterator algo by writing a function whose execution is not continous
*/
function* genRange(start = 0, end = Infinity, step = 1) {
  let iteration = 0;
  for (let i = start; i < end; i += step) {
    iteration++;
    yield i;
  }
  return iteration;
}

const gIter = genRange(1, 10, 2)
for (const value of gIter) {
  console.log(value)
}

// Still Custom
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}

for (const value of myIterable) {
  console.log(value)
}

let range = {
  from: 1,
  to: 5
}

for (let num of range) {
  console.log(num)
}