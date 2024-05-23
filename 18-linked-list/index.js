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

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head === null) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (this.head === null) {
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last === null) {
      this.head = new Node(data);
    } else {
      last.next = new Node(data);
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

console.log("\nClear list:");
list.clear();
console.log(list.head);
console.log(list.size());

console.log("\nRemove first node:");
list.insertFirst(1);
list.insertFirst(2);
console.log(list.getFirst());
list.removeFirst();
console.log(list.getFirst());

console.log("\nRemove last node:");
list.clear();
list.insertFirst(1);
list.insertFirst(2);
console.log(list.getLast());
list.removeLast();
console.log(list.getLast());

console.log("\nInsert at the end of linked list:");
list.clear();
list.insertLast(0);
console.log(list.head);

list.clear();
list.insertFirst(1);
list.insertFirst(2);
console.log(list.head);
list.insertLast(0);
console.log(list.head);
