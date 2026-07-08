/**
 * Converts a JavaScript number into its IEEE 754 double-precision (64-bit) binary representation.
 * Works for all numbers including NaN, Infinity, and -0.
 */
function toIEEE(num: number): string {
  // Create an ArrayBuffer of 8bytes (64bit)
  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);
  // Store as 64-bit float
  view.setFloat64(0, num, false);

  // Extract each byte and convert to binary
  let bits = "";
  for (let i = 0; i < 8; i++) {
    const byte = view.getUint8(i);
    bits += byte.toString(2).padStart(8, "0");
  }

  return `${bits[0]} ${bits.slice(1, 12)} ${bits.slice(12)}`;
}

// Example usage:
const numbers = [6.5, -6.5, 0.1, 0, -0, Infinity, -Infinity, NaN];
for (const n of numbers) {
  console.log(`${n} ${toIEEE(n)}`);
}

/*
6.5 0 10000000001 1010000000000000000000000000000000000000000000000000
-6.5 1 10000000001 1010000000000000000000000000000000000000000000000000
0.1 0 01111111011 1001100110011001100110011001100110011001100110011010
0 0 00000000000 0000000000000000000000000000000000000000000000000000
0 1 00000000000 0000000000000000000000000000000000000000000000000000
Infinity 0 11111111111 0000000000000000000000000000000000000000000000000000
-Infinity 1 11111111111 0000000000000000000000000000000000000000000000000000
NaN 0 11111111111 1000000000000000000000000000000000000000000000000000
 */
