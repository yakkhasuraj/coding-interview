// Return the 'middle' node of a linked list. If the list has an even number of elements, return the node at the end of the first half of the list. Do not use a counter variable, *do not* retrieve the size of the list, and only iterate through the list one time.

// Examples
// const list = new LinkedList();
// list.insertLast("a");
// list.insertLast("b");
// list.insertLast("c");
// midpoint(list); === { data: 'b' }

const { LinkedList } = require("./linked-list");

function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

const list = new LinkedList();
list.insertLast("a");
list.insertLast("b");
list.insertLast("c");
console.log(midpoint(list));
