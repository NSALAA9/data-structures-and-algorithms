# **Problem Domain:**
You are given a K-ary tree data structure, represented by the `Node` and `K_ary` classes. The tree can have any number of children (K) for each node. Your task is to implement the `fizzBuzzTree` method in the `K_ary` class that performs a FizzBuzz transformation on the values of the tree nodes.

# **Algorithm:**
The `fizzBuzzTree` method uses a level-order traversal approach to visit all the nodes in the tree. It starts by initializing a queue with the root node and processes each node one by one until the queue is empty.

1. Check if the tree is empty (i.e., the root node is null). If so, return the tree as is.
2. Initialize an empty queue and push the root node into the queue.
3. While the queue is not empty, do the following:
   a. Dequeue a node from the front of the queue (let's call it `remove`).
   b. Apply the FizzBuzz transformation to the `remove` node's value based on the following conditions:
      - If the node's value is divisible by both 3 and 5, set the value to "fizzbuzz".
      - If the node's value is divisible by 3, set the value to "fizz".
      - If the node's value is divisible by 5, set the value to "buzz".
      - If none of the above conditions are met, set the value to a string representation of the node's original value.
   c. If the `remove` node has children, enqueue all its children into the queue.
4. Return the modified tree.


# **Time Complexity (Big O):**
The time complexity of the `fizzBuzzTree` method depends on the number of nodes in the tree. In the worst-case scenario, it visits every node once during the level-order traversal.

Let `N` be the number of nodes in the tree.

- Enqueuing and dequeuing nodes in the queue takes O(1) time per node.
- Processing each node takes constant time, O(1).

The overall time complexity of the `fizzBuzzTree` method is O(N) as it traverses each node once.

**Space Complexity:**
The space complexity is also O(N) because, in the worst-case scenario, the queue can hold all the nodes in the tree at the same time during the traversal.

# the table representation of the `Node` and `K_ary` classes:

**Class: Node**

| Properties   | Description                           |
|--------------|---------------------------------------|
| `value`      | Value of the node.                    |
| `children`   | Array of children nodes.              |

**Class: K_ary**

| Properties   | Description                           |
|--------------|---------------------------------------|
| `root`       | Root node of the tree.                |

| Methods      | Description                           |
|--------------|---------------------------------------|
| `append(value)` | Adds a new node with the given value as a child of the root node if the root exists; otherwise, sets the new node as the root. |
| `fizzBuzzTree(tree)` | Performs a FizzBuzz transformation on the values of the nodes in the tree using level-order traversal. It returns the modified tree. |



Let's assume we have the following tree structure:

```
       10
     /    \
    20    30
   /  \
  40  13
```

And we want to perform the FizzBuzz transformation on the values of the nodes.

1. Start with the root node (`10`).
2. Apply the FizzBuzz transformation:
   - `10` is neither divisible by 3 nor 5, so it remains as `10`.
3. Enqueue the children nodes: `20` and `30`.
4. Dequeue `20` from the queue.
5. Apply the FizzBuzz transformation:
   - `20` is divisible by 5, so it becomes `'buzz'`.
6. Enqueue the children nodes: `40` and `13`.
7. Dequeue `30` from the queue.
8. Apply the FizzBuzz transformation:
   - `30` is divisible by 3, so it becomes `'fizz'`.
9. Enqueue the children nodes: none (no children).
10. Dequeue `40` from the queue.
11. Apply the FizzBuzz transformation:
   - `40` is divisible by 5, so it becomes `'buzz'`.
12. Enqueue the children nodes: none (no children).
13. Dequeue `13` from the queue.
14. Apply the FizzBuzz transformation:
   - `13` is neither divisible by 3 nor 5, so it remains as `13`.
15. Enqueue the children nodes: none (no children).
16. Queue is now empty, and the FizzBuzz transformation is complete.

After applying the FizzBuzz transformation, the modified tree looks like this:

```
       10
     /    \
  fizz  buzz
   /  \
 buzz fizz
```

This visual representation shows the tree traversal and the changes made to the node values during the FizzBuzz transformation. Nodes with values divisible by 3 are replaced with `'fizz'`, nodes with values divisible by 5 are replaced with `'buzz'`, and nodes with values divisible by both 3 and 5 are replaced with `'fizzbuzz'`. Other nodes retain their original values.

# Tests

![Alt text](<CC18 T.png>)