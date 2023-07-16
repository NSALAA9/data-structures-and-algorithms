# Challenge Title
Implement Stack Using Linked List


## Approach & Efficiency
To implement a stack using a linked list, we'll define a Node class with a value and next pointer. The Stack class will have a top property, which will point to the topmost node in the stack. The push operation will add a new node to the top of the stack, and the pop operation will remove and return the topmost node. Both operations have a time complexity of O(1) since they only involve updating the top pointer.

## Solution
The solution can be found in the stack.js file in this repository. To run the code, follow these steps:

1. Clone this repository to your local machine or download the stack.js file.
2. In your project directory, create a new file (e.g., index.js).
3. In the index.js file, import the Stack class from the stack.js file.
4. Create an instance of the Stack class and use the push and pop methods to perform stack operations.

Here's an example of using the Stack class:

```javascript
const { Stack } = require('./stack');

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20
console.log(stack.pop()); // Output: 10
```

In the above example, we create a new stack, push three values onto it, and then pop the values off one by one.

Feel free to modify the code and experiment with different stack operations.

## Complexity Analysis
The time complexity of the push and pop operations is O(1) since they only involve updating the top pointer of the stack. The space complexity is also O(1) as we're not using any extra data structures.

![Alt text](cc11.png)