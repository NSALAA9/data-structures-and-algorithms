const mostCommonWord = require('./CC34');

describe('mostCommonWord', () => {
  it('should handle words with varying capitalization', () => {
    expect(mostCommonWord("Cat CAT cat cat")).toBe("cat");
    expect(mostCommonWord("apple Apple APPLE")).toBe("apple");
  });

  it('should handle words with punctuation', () => {
    expect(mostCommonWord("The quick, brown dog!")).toBe("the");
    expect(mostCommonWord("I said 'Hello'!")).toBe("i");
  });

  it('should handle long sentences with multiple common words', () => {
    const sentence = "This is a test. This is only a test. Do you copy?";
    expect(mostCommonWord(sentence)).toBe("this");
  });

  it('should handle non-alphabet characters', () => {
    const sentence = "123 456 789 $%#@!";
    expect(mostCommonWord(sentence)).toBe("123");
  });

  it('should handle words with hyphens', () => {
    const sentence = "hello-world and good-morning";
    expect(mostCommonWord(sentence)).toBe("hello-world");
  });


});
