const Hashtable = require('./HashTable');

describe('Hashtable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new Hashtable();
  });

  it('should set and get a key-value pair', () => {
    hashTable.set('name', 'John');
    expect(hashTable.get('name')).toEqual('John');
  });

  it('should replace the value if a key already exists', () => {
    hashTable.set('name', 'John');
    hashTable.set('name', 'Doe');
    expect(hashTable.get('name')).toEqual('Doe');
  });

  it('should return undefined for a key that does not exist', () => {
    expect(hashTable.get('age')).toBeUndefined();
  });

  it('should check if a key exists', () => {
    hashTable.set('name', 'John');
    expect(hashTable.has('name')).toBeTruthy();
    expect(hashTable.has('age')).toBeFalsy();
  });

  it('should return a list of unique keys', () => {
    hashTable.set('name', 'John');
    hashTable.set('age', 30);
    hashTable.set('city', 'New York');
    const keys = hashTable.keys();
    expect(keys).toEqual(expect.arrayContaining(['name', 'age', 'city']));
  });


  it('should handle collisions and retrieve values correctly', () => {
    // Force a collision by using a small hash size
    const smallHashTable = new Hashtable(1);
    smallHashTable.set('name', 'John');
    smallHashTable.set('age', 30);
    expect(smallHashTable.get('name')).toEqual('John');
    expect(smallHashTable.get('age')).toEqual(30);
  });
  
});
