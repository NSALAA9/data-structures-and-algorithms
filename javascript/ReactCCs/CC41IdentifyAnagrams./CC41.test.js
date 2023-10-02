// anagram.test.js

const { areAnagrams } = require('./CC41');

describe('areAnagrams', () => {
  it('should return true for valid anagrams', () => {
    expect(areAnagrams("Eleven plus two", "Twelve plus one")).toBe(true);
    expect(areAnagrams("Clint Eastwood", "Old West Action")).toBe(true);
    expect(areAnagrams("Astronomers", "Moon starers")).toBe(true);
  });

  it('should return false for non-anagrams', () => {
    expect(areAnagrams("Software", "Swear often")).toBe(false);
    expect(areAnagrams("Hello", "World")).toBe(false);
  });

  it('should handle case insensitivity', () => {
    expect(areAnagrams("Listen", "Silent")).toBe(true);
    expect(areAnagrams("Hello", "heLLo")).toBe(true);
  });

  it('should handle spaces', () => {
    expect(areAnagrams("The Morse Code", "Here come dots")).toBe(true);
    expect(areAnagrams("test", "    test")).toBe(true);
  });
});
