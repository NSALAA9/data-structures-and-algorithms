function findFirstRepeatedWord(text) {
  // Check if the input is valid
  if (!text || typeof text !== 'string') {
    throw new Error('Invalid input: Please provide a valid text string.');
  }

  // Create a hashmap to store encountered words
  const wordMap = {};

  // Split the text into words using regular expression
  const words = text.toLowerCase().split(/\W+/);

  for (const word of words) {
    // Check if the word is empty after removing non-alphanumeric characters
    if (word === '') {
      continue;
    }

    // Check if the word is already in the hashmap
    if (wordMap[word]) {
      return word; // Found the first repeated word
    }

    // Add the word to the hashmap
    wordMap[word] = true;
  }

  return null; // No repeated words found
}
module.exports = findFirstRepeatedWord;

// Example usage:
try {
  const text1 = 'Once upon a time, there was a brave princess who...';
  const text2 = 'It was the best of times, it was the worst of times...';
  const text3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs...';
  const text4 = 'This is a test sentence with no repeated words.';
  const text5 = ' ';
  
  console.log('The repeated word in this text is','\'',findFirstRepeatedWord(text1),'\''); // Output: 'a'
  console.log('The repeated word in this text is','\'',findFirstRepeatedWord(text2),'\''); // Output: 'it'
  console.log('The repeated word in this text is','\'',findFirstRepeatedWord(text3),'\''); // Output: 'summer'
  console.log('The repeated word in this text is','\'',findFirstRepeatedWord(text4),'\''); // Output: null
  console.log('The repeated word in this text is','\'',findFirstRepeatedWord(text5),'\''); // Output: null (empty input)
} catch (error) {
  console.error(error.message);
}
