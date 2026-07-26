// Distinct word counter using Set<string>

// Example input (you can replace this with actual user input logic)
const inputLine: string = "The quick brown the";

// Trim and split into words, filtering out empty strings
const words: string[] = inputLine.trim().split(/\s+/);

// Create a Set to store distinct words (case-insensitive)
const distinctWords = new Set<string>();

for (const word of words) {
  if (word) {
    distinctWords.add(word.toLowerCase()); // normalize to lowercase
  }
}

// Output the count of distinct words
console.log(`Distinct word count: ${distinctWords.size}`);
