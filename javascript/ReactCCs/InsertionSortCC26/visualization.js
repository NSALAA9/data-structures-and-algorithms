const { insertionSort } = require('./insertionSort');

// Helper function to stringify arrays for visualization
function visualize(array) {
  return JSON.stringify(array);
}

const input1 = [8, 4, 23, 42, 16, 15];
console.log('Input:', visualize(input1));
console.log('Sorted:', visualize(insertionSort(input1)));
console.log('----------------------------------');

const input2 = [20, 18, 12, 8, 5, -2];
console.log('Input:', visualize(input2));
console.log('Sorted:', visualize(insertionSort(input2)));
console.log('----------------------------------');

const input3 = [5, 12, 7, 5, 5, 7];
console.log('Input:', visualize(input3));
console.log('Sorted:', visualize(insertionSort(input3)));
console.log('----------------------------------');

const input4 = [2, 3, 5, 7, 13, 11];
console.log('Input:', visualize(input4));
console.log('Sorted:', visualize(insertionSort(input4)));
