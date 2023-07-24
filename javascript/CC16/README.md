# Tree Max

# **Problem Domain:**
You are given a Binary Tree with numeric values stored in its nodes. Implement a method `findMaximumValue` in the `BinaryTree` class to find the maximum value stored in the tree.

# **Algorithm:**
To find the maximum value in the Binary Tree, we can use a Depth-First Search (DFS) approach. We'll traverse the tree using a stack to keep track of nodes, and during traversal, we'll compare the current node's value with the current maximum value found so far. If the current node's value is greater than the current maximum, we'll update the maximum value.

# **Pseudo Code:**

findMaximumValue():
  if the root is null:
    throw an error "Binary Tree is empty."
  
  Initialize maxVal as Number.NEGATIVE_INFINITY
  Initialize a stack nodeStack and push the root node into it

  while nodeStack is not empty:
    currentNode = pop the top node from nodeStack

if currentNode's value is greater than maxVal:
 set maxVal as currentNode's value

if currentNode has a right child:
push the right child into nodeStack

if currentNode has a left child:
push the left child into nodeStack

  return maxVal


# **Big O Complexity:**
- Time Complexity: O(n) where 'n' is the number of nodes in the Binary Tree. We visit each node once during the traversal to find the maximum value.
- Space Complexity: O(h) where 'h' is the height of the Binary Tree. In the worst case, the stack can hold all the nodes in the longest branch of the tree, which is the height of the tree.

# Traversal Process:

Step 1:
maxVal = -Infinity
nodeStack = [5]

Step 2:
maxVal = 5
nodeStack = [8, 3]

Step 3:
maxVal = 5
nodeStack = [8, 4, 2]

Step 4:
maxVal = 5
nodeStack = [8, 4]

Step 5:
maxVal = 5
nodeStack = [8]

Step 6:
maxVal = 5
nodeStack = [11, 8]

Step 7:
maxVal = 5
nodeStack = [11, 7]

Step 8:
maxVal = 5
nodeStack = [11]

Step 9:
maxVal = 11
nodeStack = [7]

Step 10:
maxVal = 11
nodeStack = []

Traversal Complete. Return maxVal = 11


# Table representation 

| Step | maxVal     | nodeStack  | currentNode | Action                         |
|------|------------|------------|--------------|--------------------------------|
| 1    | -Infinity  | [5]        | -            | Initialize maxVal and nodeStack |
| 2    | 5          | [8, 3]     | 5            | Update maxVal to 5 (currentNode.value) |
| 3    | 5          | [8, 4, 2]  | 3            | Update maxVal to 5              |
| 4    | 5          | [8, 4]     | 2            | Update maxVal to 5              |
| 5    | 5          | [8]        | 4            | Update maxVal to 5              |
| 6    | 5          | [11, 8]    | 4            | Update maxVal to 5              |
| 7    | 5          | [11, 7]    | 8            | Update maxVal to 5              |
| 8    | 5          | [11]       | 7            | Update maxVal to 5              |
| 9    | 11         | [7]        | 11           | Update maxVal to 11             |
| 10   | 11         | []         | 7            | Update maxVal to 11             |
---------------------------------------------------
Traversal Complete. Return maxVal = 11

