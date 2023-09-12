function mostCommonWord(book) {
  // Convert the input string to lowercase and split it into words
  const words = book.toLowerCase().split(/\s+/);

  // Create a Map to store word frequencies
  const wordCount = new Map();

  // Initialize variables to keep track of the most common word and its count
  let mostCommonWord = '';
  let mostCommonCount = 0;

  // Iterate through the words in the book
  for (const word of words) {
    // Remove any punctuation if needed
    const cleanedWord = word.replace(/[.,!?()[]{}":;]/g, '');

    // If the word is not empty after removing punctuation
    if (cleanedWord) {
      // Update the word count in the Map
      if (wordCount.has(cleanedWord)) {
        wordCount.set(cleanedWord, wordCount.get(cleanedWord) + 1);
      } else {
        wordCount.set(cleanedWord, 1);
      }

      // Update the most common word if needed
      if (wordCount.get(cleanedWord) > mostCommonCount) {
        mostCommonWord = cleanedWord;
        mostCommonCount = wordCount.get(cleanedWord);
      }
    }
  }

  return mostCommonWord;
}
module.exports = mostCommonWord;




// Test cases
console.log(('most Common Word in'+' '+'\'In a galaxy far far away\' is:')+ mostCommonWord('In a galaxy far far away')+' '); // Output: "far"
console.log(('most Common Word in'+' '+'\'Taco cat ate a taco\'is:')+ mostCommonWord('Taco cat ate a taco')+' '); // Output: "taco"
console.log(('most Common Word in'+' '+'\'No. Try not. Do or do not. There is no try.\'is:')+ mostCommonWord('No. Try not. Do or do not. There is no try.')+ ' '); // Output: "no"
