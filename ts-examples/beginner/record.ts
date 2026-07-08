// Record for key-value data when object is plain 
// key are strings and data is small.
const ages: Record<string, number> = {
  alice: 30,
  bob: 25
}

console.log(ages.alice); // 30
ages.carol = 30;

// Map<K, V> true hash map, non-string keys, order iteration, and proper .size
// use when non-string keys, fequency insertion/deletion, or accurate size.
const counts: Map<string, number> = new Map();
counts.set("go", 1);
counts.set("go", (counts.get("go") ?? 0) + 1);