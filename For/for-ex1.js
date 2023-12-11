"use strict";
// You have the array: [1, 20, 5, 60, 7, 14, 8].
// a) Use a for loop to console.log only the numbers greater than 10.
// b) Use an array method (function) to do the same thing from a).
// c) Create two arrays: one with odd numbers and one with even numbers.

const arr = [1, 20, 5, 60, 7, 14, 8, 66, 3, 222, 9, 3423423, 33];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) console.log(arr[i]);
}
//
const biggerthanTen = arr.filter((num) => {
  return num > 10;
});

console.log(biggerthanTen);

let oddNumbers = [];
const evenNumbers = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    oddNumbers.push(arr[i]);
  } else {
    evenNumbers.push(arr[i]);
  }
}

console.log(oddNumbers);
console.log(evenNumbers);
