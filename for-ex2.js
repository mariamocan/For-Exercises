// You have 2 arrays: [1, 20, 5, 60, 10, 7, 14, 8] and [1, 2, 3]. Create a function that has an array as a parameter. The function should console.log the following:
// - “You have the number 10 in the array” if the array contains 10.
// - Only the odd indexes.
// - Only the values from the odd indexes.
// - Only the even values.

const firstArray = [1, 20, 5, 60, 10, 7, 14, 8];
const secondArray = [1, 2, 3];

function printByCondition(array) {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 1) {
      console.log("index = ", i);
      console.log("value from odd index", array[i]);
    }

    if (array[i] === 10) {
      console.log(array[i], `You have the number 10 in the array`);
    }

    if (array[i] % 2 === 0) {
      console.log("EVEN VALUES !!!!!!!!!!!!!!!!!!!!!!", array[i]);
    }
  }
}
printByCondition(firstArray);
console.log(" ");
printByCondition(secondArray);
