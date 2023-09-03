class HashNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
  
class Hashtable {
  constructor(size = 1024) {
    this.size = size;
    this.buckets = new Array(size);
  }
  
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }
  
  set(key, value) {
    const index = this._hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value);
    } else {
      let current = this.buckets[index];
      while (current) {
        if (current.key === key) {
          current.value = value;
          return;
        }
        if (!current.next) {
          current.next = new HashNode(key, value);
          return;
        }
        current = current.next;
      }
    }
  }
  
  get(key) {
    const index = this._hash(key);
    let current = this.buckets[index];
    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return undefined;
  }
  
  has(key) {
    const index = this._hash(key);
    let current = this.buckets[index];
    while (current) {
      if (current.key === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  
  keys() {
    const keysList = [];
    for (const bucket of this.buckets) {
      let current = bucket;
      while (current) {
        keysList.push(current.key);
        current = current.next;
      }
    }
    return keysList;
  }
}
module.exports = Hashtable;

// Example Tests
const hashTable = new Hashtable();
hashTable.set('name', 'Alaa');
hashTable.set('age', 24);
  
console.log(hashTable.get('name')); // Output: Alaa
console.log(hashTable.get('age')); // Output: 24
console.log(hashTable.get('city')); // Output: undefined
  
console.log(hashTable.has('name')); // Output: true
console.log(hashTable.has('city')); // Output: false
  
console.log(hashTable.keys()); // Output: ['name', 'age']
