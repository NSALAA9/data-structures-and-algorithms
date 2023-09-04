const findFirstRepeatedWord = require('./HashMap');

describe('findFirstRepeatedWord', () => {
  it('should find the first repeated word in a sentence', () => {
    const text = "Once upon a time, there was a brave princess who...";
    const result = findFirstRepeatedWord(text);
    expect(result).toBe('a');
  });
  
  it('should handle case sensitivity', () => {
    const text = "It was the best of Times, it was the worst of times...";
    const result = findFirstRepeatedWord(text);
    expect(result).toBe('it');
  });
  
  it('should handle special characters', () => {
    const text = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs...";
    const result = findFirstRepeatedWord(text);
    expect(result).toBe('summer');
  });
  
  it('should return null for a sentence with no repeated words', () => {
    const text = "This is a test sentence with no repeated words.";
    const result = findFirstRepeatedWord(text);
    expect(result).toBe(null);
  });
  
  it('should return null for an empty input', () => {
    const emptyText = "";
    expect(() => findFirstRepeatedWord(emptyText)).toThrowError(
      'Invalid input: Please provide a valid text string.'
    );
  });
  
  
  it('should throw an error for invalid input', () => {
    const invalidInput = 123; // Invalid input (not a string)
    expect(() => findFirstRepeatedWord(invalidInput)).toThrowError(
      'Invalid input: Please provide a valid text string.'
    );
  });
  
  it('should find the first repeated word with leading and trailing non-alphanumeric characters', () => {
    const text = "!This is a test sentence with non-alphanumeric, characters. The test is to find... the repeated word.";
    const result = findFirstRepeatedWord(text);
    expect(result).toBe('test');
  });
  
  
  it('should find the first repeated word with multiple spaces between words', () => {
    const text = "This is   a test   with   multiple   spaces   between words. Test the repetition.";
    const result = findFirstRepeatedWord(text);
    expect(result).toBe('test');
  });
  
  it('should find the first repeated word when the repeated word is at the beginning', () => {
    const text = "apple banana cherry apple date";
    const result = findFirstRepeatedWord(text);
    expect(result).toBe('apple');
  });
  
  it('should find the first repeated word when the repeated word is at the end', () => {
    const text = "dog elephant flamingo giraffe horse horse";
    const result = findFirstRepeatedWord(text);
    expect(result).toBe('horse');
  });
});
