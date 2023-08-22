# Pseudocode:


![Alt text](<Screenshot 2023-08-22 040847.png>)
  # JS Code 

  ![Alt text](<Screenshot 2023-08-22 035348.png>)

  # Explination 

### Insert Function:

  - The insert function takes a sorted array (sorted) and a value (value) that needs to be inserted into the sorted array.

- It starts by finding the correct index (i) where the value should be inserted. The first while loop helps locate the correct index by iterating through the sorted array until value is no longer greater than the current element.

- The second while loop is responsible for shifting elements to make space for the value at the correct index. It temporarily stores the current element in temp, replaces the element with value, and then updates value to temp.

- Finally, the value is pushed onto the sorted array at the correct position.

### InsertionSort Function:

- The InsertionSort function takes an input array (input) and returns a sorted array.

- It initializes the sorted array with the first element from the input array.

- The for loop iterates through the remaining elements of the input array (starting from index 1) and inserts each element into the sorted array using the insert function.

- After processing all elements, the function returns the fully sorted sorted array.


# Complexity
- Best Case: O(n)
- Average Case: O(n^2)
- Worst Case: O(n^2)

# visualization

![Alt text](<Screenshot 2023-08-22 065100.png>)

# Testing

![Alt text](<Screenshot 2023-08-22 065126.png>)