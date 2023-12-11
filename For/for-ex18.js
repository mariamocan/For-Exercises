// You have an array. Display all the values such that: the index is divisible by 3 and the value is divisible by 1000. E.g.:
// For the array [1, 9, 4000, 8000, 6, 7, 1, 4, 9, 2000, 2, 3, 5] we DON’T display 4000 because the index is 2. We display 8000 because the index 3, and 8000 is divisible by 1000. We display 2000 because the index 9, and 2000 is divisible by 1000.

function divisibleIndexAndValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 && arr[i] % 1000 === 0) {
      console.log(arr[i]);
    }
  }
}
console.log(
  divisibleIndexAndValue([1, 9, 4000, 8000, 6, 7, 1, 4, 9, 2000, 2, 3, 5])
);
