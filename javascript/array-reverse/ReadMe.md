# REVERSE ARRAY

Given an array arr, we want to reverse the order of its elements.

Example: [1, 2, 3, 4, 5]
Expected Output: [5, 4, 3, 2, 1]

1. Initialize two pointers, start and end:
   - start = 0 (points to the first element of the array)
   - end = arr.length - 1 (points to the last element of the array)

2. Swap elements using the pointers:
   - While start < end:
     - Swap arr[start] with arr[end]
     - Increment start pointer by 1
     - Decrement end pointer by 1

3. Return the reversed array.

**Solution**

function reverseArray(arr) {

  let start = 0;
  
  let end = arr.length - 1;
  

  while (start < end) {
  
    // Swap elements
    
    const temp = arr[start];
    
    arr[start] = arr[end];
    
    arr[end] = temp;
    

    // Move pointers
    
    start++;
    
    end--;
    
  }
  

  return arr;
  
}



REVERSE ARRAY ALTERNATIVE

Given an array arr, we want to reverse the order of its elements.

Example: [10, 11, 12, 13, 14]
Expected Output: [14, 13, 12, 11, 10]

1. Create an empty result array.

2. Iterate over the elements in the input array in reverse order:
   - For each element arr[i], append it to the result array.

3. Return the result array.

**Alternative Solution**

function reverseArrayAlternative(arr) {

  const result = [];
  
  for (let i = arr.length - 1; i >= 0; i--) {
  
    result.push(arr[i]);
    
  }
  
  return result;
}


-------------------------------------------------------------

### In terms of efficiency, the two-pointers approach has a slight advantage as it performs the reversal in-place without creating a new array. However, the result array iteration approach is more readable and flexible, allowing for easier modifications or extensions to the algorithm.
