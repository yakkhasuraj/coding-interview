// Implement classes Node and Linked List

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}

console.log("\nNode:");
const node = new Node("a", "b");
console.log(node.data);
console.log(node.next);

console.log("\nLinked list:");
const list = new LinkedList();
console.log(list.head);

console.log("\nInsert 1:");
list.insertFirst(1);
console.log(list.head);

console.log("\nInsert 2:");
list.insertFirst(2);
console.log(list.head);
