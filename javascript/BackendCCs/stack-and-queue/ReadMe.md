# Stack and Queue Implementation
This repository contains the implementation of a Stack and Queue using a Linked List as the underlying data storage mechanism.

Stack
The Stack class represents a stack data structure. It supports the following operations:

push(value): Adds a new node with the given value to the top of the stack with O(1) time complexity.
pop(): Removes and returns the value of the node from the top of the stack. It raises an exception if called on an empty stack.
peek(): Returns the value of the node located at the top of the stack. It raises an exception if called on an empty stack.
isEmpty(): Returns a boolean indicating whether the stack is empty or not.
Queue
The Queue class represents a queue data structure. It supports the following operations:

enqueue(value): Adds a new node with the given value to the back of the queue with O(1) time complexity.
dequeue(): Removes and returns the value of the node from the front of the queue. It raises an exception if called on an empty queue.
peek(): Returns the value of the node located at the front of the queue. It raises an exception if called on an empty queue.
isEmpty(): Returns a boolean indicating whether the queue is empty or not.