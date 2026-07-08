// IF runs a block when a conditions is truthy, skips it otherwise.
const score = 87;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B")
} else if (score >= 70) {
  console.log("C")
} else {
  console.log("F")
}

