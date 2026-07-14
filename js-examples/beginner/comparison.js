
console.log("Strict equality (===) - the safe default");

console.log(1 === 1)                    // true 
console.log(1 === '1');                 // false (different types)
console.log('a' === 'a');               // true 
console.log(null === null);             // true
console.log(undefined === undefined);   // true 
console.log(null === undefined);        // false 

// Object/array references - same objects
const a = {};
const b = {};
console.log(a === a);                   // true 
console.log(a === b);                   //false  (different object)

console.log("Loose equality (different objects) - with type coecion:");

console.log(1 == '1');                  //true (string coerced to number)
console.log(0 == '');                   // true (both coerce to 0)
console.log(0 == false);                // true
console.log('' == false);               // true
console.log(1 == true);                 // true (true coeces to 1)
console.log(null == undefined);         // true (special case)
console.log([] == false);               // true (! you read that right)
console.log([0] == 0);                  // true 
console.log([null] == 0);               // true

console.log("Type coercion: the bigger picture")
console.log(1 + 2);                     // 3 (numeric add)
console.log('1' + 2);                   // '12' (string concat - string wins)
console.log(1 + '2');                   // '12'
console.log([] + []);                   // '' (both coerce to '')
console.log([] + {});                   // '[object Object]'
console.log({} + []);                   // 0 in some contexts (empty block + 0)

console.log("Object.is even stricter than ===");
// Useful for comparing value stored in a map
console.log(Object.is(NaN, NaN));       // true (=== returns false)
console.log(Object.is(0, -0));          // false (=== returns true)
console.log(Object.is(1,1));            // true



