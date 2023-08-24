const { insert, insertionSort } = require('./insertionSort');
const assert = require('assert');

// Helper function to stringify arrays for visualization
function visualize(array) {
  return JSON.stringify(array);
}

describe('insert function', () => {
  it('should insert a value in the correct position', () => {
    const sorted = [1, 3, 5, 7];
    insert(sorted, 4);
    assert.strictEqual(visualize(sorted), '[1,3,4,5,7]');
  });
});

describe('insertionSort function', () => {
  it('should sort an array using insertion sort', () => {
    const input = [5, 1, 4, 2, 8];
    const sorted = insertionSort(input);
    assert.strictEqual(visualize(sorted), '[1,2,4,5,8]');
  });
});

