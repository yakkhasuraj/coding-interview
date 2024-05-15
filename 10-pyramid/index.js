// Write a function that accepts a positive number N. The function should console log a pyramid shape with N using the # character.
// Make sure the pyramid has spaces on both the left *and* right hand sides

// Examples
// pyramid(1)
// "#"
// pyramid(2)
// " # "
// "###"
// pyramid(3)
// "  #  "
// " ### "
// "#####"

// Solution #1
function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < n * 2 - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }

    console.log(level);
  }
}

// Solution #2
function pyramid(n, row = 0, level = "") {
  if (n === row) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}

pyramid(1);
pyramid(3);
