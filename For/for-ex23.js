// Draw a pyramid of stars like the one below. Hint: You need to use 2 for’s inside a for.
let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
  // Inner Loop - I -> for the spaces
  for (let space = 1; space <= rows - n; space++) {
    pattern += " ";
  }

  // Inner Loop - II -> for the numbers
  for (let star = 1; star <= 2 * n - 1; star++) {
    pattern += "*";
  }

  pattern += "\n";
}
console.log(pattern);
