function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }
}
module.exports = insertionSort;


// Example 1
let inputArray1 = [12, 11, 13, 5, 6];
console.log('Example 1 - Original array:', inputArray1);
insertionSort(inputArray1);
console.log('Example 1 - Sorted array:', inputArray1);

// Example 2
let inputArray2 = [-5, -10, 0, -3, 8, 5, -1];
console.log('Example 2 - Original array:', inputArray2);
insertionSort(inputArray2);
console.log('Example 2 - Sorted array:', inputArray2);

// Example 3
let inputArray3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log('Example 3 - Original array:', inputArray3);
insertionSort(inputArray3);
console.log('Example 3 - Sorted array:', inputArray3);
