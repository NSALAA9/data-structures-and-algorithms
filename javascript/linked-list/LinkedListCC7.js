// 'use strict';
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }


// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   kthFromEnd(k) {
//     if (!this.head) {
//       throw new Error('Empty linked list');
//     }

//     if (k <= 0) {
//       throw new Error('k must be a positive integer');
//     }

//     let p1 = this.head;
//     let p2 = this.head;

//     // Move p2 k nodes ahead
//     for (let i = 0; i < k; i++) {
//       if (!p2) {
//         throw new Error('k is greater than the length of the linked list');
//       }
//       p2 = p2.next;
//     }

//     // Move both pointers until p2 reaches the end
//     while (p2 && p2.next) {
//       p1 = p1.next;
//       p2 = p2.next;
//     }

//     return p1.value;
//   }
// }
// const list = new LinkedList();
// const node= new Node();

// module.exports = LinkedList ;
//console.log("--------------------------------------------------");

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   append(value) {
//     const newNode = new Node(value);

//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = newNode;
//     }
//   }

//   kthFromEnd(k) {
//     if (k < 0) {
//       throw new Error('k must be a non-negative integer.');
//     }

//     if (!this.head) {
//       throw new Error('Cannot perform operation on an empty list.');
//     }

//     let slow = this.head;
//     let fast = this.head;

//     for (let i = 0; i < k; i++) {
//       if (!fast.next) {
//         throw new Error('k is greater than the length of the linked list.');
//       }
//       fast = fast.next;
//     }

//     while (fast.next) {
//       slow = slow.next;
//       fast = fast.next;
//     }

//     return slow.value;
//   }
// }

// // const list = new LinkedList();
// // const node= new Node();

//console.log("--------------------------------------------------");

'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  kthFromEnd(k) {
    if (k < 0) {
      throw new Error('k must be a positive integer.');
    }

    if (!this.head) {
      throw new Error('The linked list is empty.');
    }

    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }

    if (k >= count) {
      throw new Error('k is greater than or equal to the length of the linked list.');
    }

    current = this.head;
    for (let i = 0; i < count - k - 1; i++) {
      current = current.next;
    }

    return current.value;
  }
}

module.exports = { LinkedList, Node };


