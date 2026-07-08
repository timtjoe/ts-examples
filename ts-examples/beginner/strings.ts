function reverse(string: string): string {
  // Split into chars, reverse the array, join back into a string.
  const reversed = string.split("").reverse().join("");
  return reversed;
}

console.log(reverse("Typescript"));
// tpircsepyT
