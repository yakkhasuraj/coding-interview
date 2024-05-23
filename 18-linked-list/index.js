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

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (this.head === null) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }
  }
}

console.log("\nNode:");
const node = new Node("a", "b");
console.log(node.data);
console.log(node.next);

console.log("\nLinked list:");
const list = new LinkedList();
console.log(list.head);
console.log(list.size());
console.log(list.getFirst());
console.log(list.getLast());

console.log("\nInsert 1:");
list.insertFirst(1);
console.log(list.head);
console.log(list.size());

console.log("\nInsert 2:");
list.insertFirst(2);
console.log(list.head);
console.log(list.size());
console.log(list.getFirst());
console.log(list.getLast());
