// Și asta: Convert the arrays like so: [2, 300, -100, 123, 4, 12] into [6, 5, 6, 5, 6, 5],  [12, 1300, 111100, 9123, 4, 12, 4, 5, 7] into [9, 8, 9, 8, 9, 8, 9, 8, 9]. The rule is to replace the values from the even positions with the array’s length and the values from the odd positions with the array’s length - 1.
const arr = [2, 300, -100, 123, 4, 12];
const arr1 = [12, 1300, 111100, 9123, 4, 12, 4, 5, 7];

function convertArray(num) {
  for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
      num[i] = num.length;
    }
    if (i % 2 === 1) {
      num[i] = num.length - 1;
    }
    console.log(num[i]);
  }
}
convertArray(arr);
convertArray(arr1);
