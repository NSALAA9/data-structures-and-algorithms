function areAnagrams(str1, str2) {
  // Remove spaces and convert both strings to lowercase for case-insensitive comparison
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // Check if the lengths of the two strings are different
  if (str1.length !== str2.length) {
    return false;
  }

  // Create objects to count character occurrences
  const charCount1 = {};
  const charCount2 = {};

  // Populate charCount1
  for (const char of str1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  // Populate charCount2
  for (const char of str2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Compare the two objects
  for (const char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}


module.exports = {
  areAnagrams: areAnagrams
};
// Test cases
console.log(areAnagrams("Eleven plus two", "Twelve plus one")); // true
console.log(areAnagrams("Clint Eastwood", "Old West Action")); // true
console.log(areAnagrams("Software", "Swear often")); // false
console.log(areAnagrams("Astronomers", "Moon starers")); // true
