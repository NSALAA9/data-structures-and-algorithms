// // testMergeSort.js
// const assert = require('assert');
// const mergeSort = require('./MergeSort');

// // Test cases
// const testCases = [
//   {
//     input: [8, 4, 23, 42, 16, 15],
//     expectedOutput: [4, 8, 15, 16, 23, 42],
//   },
//   {
//     input: [20, 18, 12, 8, 5, -2],
//     expectedOutput: [-2, 5, 8, 12, 18, 20],
//   },
//   {
//     input: [5, 12, 7, 5, 5, 7],
//     expectedOutput: [5, 5, 5, 7, 7, 12],
//   },
//   {
//     input: [2, 3, 5, 7, 13, 11],
//     expectedOutput: [2, 3, 5, 7, 11, 13],
//   },
//   // Add more test cases here
// ];

// // Run tests
// testCases.forEach((testCase, index) => {
//   const { input, expectedOutput } = testCase;
//   const inputCopy = [...input];

//   mergeSort(input);
  
//   assert.strictEqual(
//     JSON.stringify(input),
//     JSON.stringify(expectedOutput),
//     `Test case ${index + 1} failed. Input: ${inputCopy}`
//   );

//   console.log(`Test case ${index + 1} passed.`);
// });

// MergeSort.test.js
const mergeSort = require('./MergeSort');

test('Merge Sort works correctly', () => {
  const input = [8, 4, 23, 42, 16, 15];
  const expectedOutput = [4, 8, 15, 16, 23, 42];

  mergeSort(input);

  expect(input).toEqual(expectedOutput);
});

test('Merge Sort handles an empty array', () => {
  const input = [];
  const expectedOutput = [];

  mergeSort(input);

  expect(input).toEqual(expectedOutput);
});

test('Merge Sort handles an array with one element', () => {
  const input = [7];
  const expectedOutput = [7];

  mergeSort(input);

  expect(input).toEqual(expectedOutput);
});

test('Merge Sort handles a reverse-sorted array', () => {
  const input = [20, 18, 12, 8, 5, -2];
  const expectedOutput = [-2, 5, 8, 12, 18, 20];

  mergeSort(input);

  expect(input).toEqual(expectedOutput);
});

test('Merge Sort handles an array with few unique values', () => {
  const input = [5, 12, 7, 5, 5, 7];
  const expectedOutput = [5, 5, 5, 7, 7, 12];

  mergeSort(input);

  expect(input).toEqual(expectedOutput);
});

test('Merge Sort handles a nearly-sorted array', () => {
  const input = [2, 3, 5, 7, 13, 11];
  const expectedOutput = [2, 3, 5, 7, 11, 13];

  mergeSort(input);

  expect(input).toEqual(expectedOutput);
});

test('Merge Sort handles a large array of random values', () => {
  const input = generateRandomArray(1000);
  const expectedOutput = [...input].sort((a, b) => a - b);

  mergeSort(input);

  expect(input).toEqual(expectedOutput);
});

// Utility function to generate a random array
function generateRandomArray(size) {
  const randomArray = [];
  for (let i = 0; i < size; i++) {
    randomArray.push(Math.floor(Math.random() * 1000)); // Adjust range as needed
  }
  return randomArray;
}

