# Hashtable Implementation

## Problem Domain

The problem domain for this Hashtable implementation is to create a data structure that can efficiently store key-value pairs and perform operations like setting values for keys, getting values for keys, checking if a key exists, and retrieving a list of all unique keys.


### Key Operations to Support

1. `set(key, value)`: Set a key-value pair in the Hashtable, handling collisions.
2. `get(key)`: Retrieve the value associated with a given key.
3. `has(key)`: Check if a key exists in the Hashtable.
4. `keys()`: Return a collection of all unique keys.
5. `hash(key)`: Calculate the index in the collection for a given key.

## Algorithm

### `set(key, value)`

1. Calculate the index using the `_hash(key)` method.
2. If the bucket at that index is empty, create a new `HashNode` with the key and value and assign it to the bucket.
3. If the bucket is not empty, traverse the linked list in the bucket:
   - If a node with the same key exists, update its value.
   - If no node with the same key is found, add a new `HashNode` at the end of the linked list with the key and value.

### `get(key)`

1. Calculate the index using the `_hash(key)` method.
2. Traverse the linked list at the index and search for a node with the matching key.
3. If found, return the value; otherwise, return `undefined`.

### `has(key)`

1. Calculate the index using the `_hash(key)` method.
2. Traverse the linked list at the index and search for a node with the matching key.
3. If found, return `true`; otherwise, return `false`.

### `keys()`

1. Initialize an empty array `keysList` to store unique keys.
2. Iterate over all buckets in the Hashtable.
3. For each bucket, traverse the linked list and add each unique key to `keysList`.
4. Return `keysList`.

### `hash(key)`

1. Calculate the hash value for the key by summing the character codes of each character in the key and taking the modulo of the Hashtable's size.

## Solution

 Implementation of the `Hashtable` class. It includes the necessary methods and logic for setting key-value pairs, getting values, checking key existence, and retrieving unique keys.

## Big O Analysis

Let's analyze the time and space complexities of the Hashtable operations:

- `set(key, value)`:
   - Time Complexity: In the worst case, when there are many collisions, the time complexity can be O(n), where n is the number of key-value pairs in the Hashtable. However, on average, with a good hash function, it's often close to O(1).
   - Space Complexity: O(1) since it doesn't use additional memory based on the number of key-value pairs.

- `get(key)`:
   - Time Complexity: Similar to `set`, in the worst case, it can be O(n), but it's often O(1) on average with a good hash function.
   - Space Complexity: O(1).

- `has(key)`:
   - Time Complexity: Similar to `get`, it can be O(n) in the worst case but is often O(1) on average.
   - Space Complexity: O(1).

- `keys()`:
   - Time Complexity: O(n), where n is the number of key-value pairs since it needs to iterate over all keys to collect them.
   - Space Complexity: O(n) as it returns a list of keys.

- `hash(key)`:
   - Time Complexity: O(k), where k is the length of the key string, as it calculates the hash value based on the characters in the key.
   - Space Complexity: O(1).

## Testing

![Alt text](<30 1.png>)


![Alt text](<30 2.png>)