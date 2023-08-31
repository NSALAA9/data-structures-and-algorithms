const chai = require('chai');
const assert = chai.assert;
const insertionSort = require('./insertionSort');

describe('Insertion Sort', () => {
  it('should sort an array in ascending order', () => {
    let inputArray = [3, -1, 7, 2, 5, 0, 4];
    insertionSort(inputArray);
    assert.deepEqual(inputArray, [-1, 0, 2, 3, 4, 5, 7]);
  });

  it('should handle an array with duplicate values', () => {
    let inputArray = [6, 3, 8, 2, 6, 1, 3];
    insertionSort(inputArray);
    assert.deepEqual(inputArray, [1, 2, 3, 3, 6, 6, 8]);
  });

  it('should handle an already sorted array', () => {
    let inputArray = [1, 2, 3, 4, 5, 6];
    insertionSort(inputArray);
    assert.deepEqual(inputArray, [1, 2, 3, 4, 5, 6]);
  });

  it('should handle an array with one element', () => {
    let inputArray = [7];
    insertionSort(inputArray);
    assert.deepEqual(inputArray, [7]);
  });

  it('should correctly sort a large array', () => {
    let inputArray = [9, 3, 5, 1, 8, 2, 7, 4, 6];
    insertionSort(inputArray);
    assert.deepEqual(inputArray, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should handle a reversed array', () => {
    let inputArray = [6, 5, 4, 3, 2, 1];
    insertionSort(inputArray);
    assert.deepEqual(inputArray, [1, 2, 3, 4, 5, 6]);
  });


});
