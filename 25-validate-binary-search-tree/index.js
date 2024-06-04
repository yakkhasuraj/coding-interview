// Given a node, validate the binary search tree, ensuring that every node's left hand child is less than the parent node's value, and that every node's right hand child is greater than the parent

const Node = require("./node");

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

let root = new Node(8);
root.insert(3);
root.insert(1);
root.insert(6);
root.insert(4);
root.insert(7);
root.insert(10);
root.insert(14);
root.insert(13);
console.log(validate(root));

root = new Node(8);
root.insert(3);
root.insert(1);
root.insert(6);
root.insert(4);
root.insert(7);
root.insert(10);
root.insert(14);
root.insert(13);
root.left.right.right = new Node(12);
console.log(validate(root));
