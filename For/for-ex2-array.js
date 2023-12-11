// You have 2 arrays: [1, 20, 5, 60, 10, 7, 14, 8] and [1, 2, 3]. Create a function that has an array as a parameter. The function should console.log the following:
// - “You have the number 10 in the array” if the array contains 10.
// - Only the odd indexes.
// - Only the values from the odd indexes.
// - Only the even values.

function displaySpecialValues(arr) {
  // if (arr.some((x) => x === 10)) {
  //   console.log("You have the number 10 in the array");
  // }

  // console.log("----");

  arr
    .filter((val, index) => index % 2 === 1)
    .forEach((val1) => console.log(val1));

  // console.log("----");

  // arr
  //   .filter((val, index) => index % 2 === 0)
  //   .forEach((val) => console.log(val));
}

displaySpecialValues([1, 20, 5, 60, 10, 7, 14, 8]);
// displaySpecialValues([1, 20, 5, 60, 10, 7, 14, 8]);
