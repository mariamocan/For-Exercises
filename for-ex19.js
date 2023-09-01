// You have an array. If the index is divisible by 5, increment the value with 10. E.g.:
// For the array [1, 6, 7, 1, 4, 400, 6, 7, 8, 9, 10, 9, 8] you need to display [11, 6, 7, 1, 4, 410, 6, 7, 8, 9, 20, 9, 8]

function incrementValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 5 === 0) {
      arr[i] += 10;
    }
  }
  return arr;
}
console.log(incrementValue([1, 6, 7, 1, 4, 400, 6, 7, 8, 9, 10, 9, 8]));

// i = 0 ---- 0 % 5 -------- arr[0] = 1 ----  arr[i] += 1 + 10 = 11
