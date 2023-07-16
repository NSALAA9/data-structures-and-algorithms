# Problem Domain:
The problem is to determine whether the brackets in a given string are balanced or not. The string can contain three types of brackets: round brackets (), square brackets [], and curly brackets {}. The brackets are considered balanced if each opening bracket has a corresponding closing bracket in the correct order.

# Solution Approach:
To solve the problem, we can utilize a stack data structure. We iterate through the characters in the string, and whenever we encounter an opening bracket, we push it onto the stack. When we encounter a closing bracket, we check if it matches the top element of the stack (the opening bracket of the same type). If there is a match, we pop the opening bracket from the stack. If the stack is empty at the end of the iteration, it indicates that all brackets are balanced.

# Algorithm:

Initialize an empty stack.
Iterate through each character in the input string:
If the character is an opening bracket (i.e., '(', '[', or '{'), push it onto the stack.
If the character is a closing bracket (i.e., ')', ']', or '}'):
If the stack is empty or the top element of the stack doesn't match the closing bracket, return false (unbalanced brackets).
Otherwise, pop the top element from the stack.
After iterating through all characters, check if the stack is empty.
If the stack is empty, return true (balanced brackets).
Otherwise, return false (unbalanced brackets).
# Big O Analysis:

Time Complexity: The algorithm has a time complexity of O(n) since it iterates through each character in the input string once.
Space Complexity: The algorithm has a space complexity of O(n) in the worst case. In the worst scenario, if all characters in the string are opening brackets, they will be stored in the stack.

[PR](https://github.com/NSALAA9/data-structures-and-algorithms/pull/26)