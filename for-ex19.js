// You have an array. If the index is divisible by 5, increment the value with 10. E.g.:
// For the array [1, 6, 7, 1, 4, 400, 6, 7, 8, 9, 10, 9, 8] you need to display [1, 6, 7, 1, 4, 410, 6, 7, 8, 9, 20, 9, 8]

function incrementValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 5 === 0 && i !== 0) {
      arr[i] += 10;
    }
  }
  return arr;
}
console.log(incrementValue([1, 6, 7, 1, 4, 400, 6, 7, 8, 9, 10, 9, 8]));
