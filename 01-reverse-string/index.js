// Given a string, return a new string with the reversed order of characters

// Examples
// reverse('hello') === 'olleh'

// Function Overriding
// Solution #1
function reverse(str) {
  return str.split("").reverse().join("");
}

// Solution #2
function reverse(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// Solution #3
function reverse(str = "Hello") {
  return str.split("").reduce((rev, char) => char + rev, "");
}

console.log(reverse("hello"));
