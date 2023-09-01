// Implement a “find” function (tip: use the break statement for performance concerns)

const arr = [3, 97, 34, 56, 8, 6, 5];

function find(arr, searchNumber) {
  let found = false;
  for (const number of arr) {
    if (number === searchNumber) {
      found = true;
      break;
    }
  }
  if (found) {
    return searchNumber;
  }
  return undefined;
}

console.log(find([10, 20, 30, 40], 20));
