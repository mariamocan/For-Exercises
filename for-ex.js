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
const biggerthanTen = arr.filter(checkNumbers);

function checkNumbers(num) {
  return num > 10;
}
console.log(biggerthanTen);

let oddNumbers = [];
const evenNumbers = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    oddNumbers.push(arr[i]);
  } else if (arr[i] % 2 === 0) {
    evenNumbers.push(arr[i]);
  }
}

console.log(oddNumbers);
console.log(evenNumbers);

// You have 2 arrays: [1, 20, 5, 60, 10, 7, 14, 8] and [1, 2, 3]. Create a function that has an array as a parameter. The function should console.log the following:
// - “You have the number 10 in the array” if the array contains 10.
// - Only the odd indexes.
// - Only the even values.

const firstArray = [1, 20, 5, 60, 10, 7, 14, 8];
const secondArray = [1, 2, 3];

function printByCondition(...array) {
  let odd = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 10)
      console.log(array[i], `You have the number 10 in the array`);
    else if (array[i] % 2 === 0) console.log(array[i]);
  }
}
printByCondition(...firstArray);

// Print in the console the numbers from the interval [0, 1000] that divide by 13 (split by dot . or contains dot . or use the modulo % operator).

for (let i = 13; i < 1000; i++) {
  if (i % 13 === 0) console.log(i);
}

// Count the occurrences of 4 from the array [10, 4, 8, 4, 7, 4, 29, 4, 99] and console.log them using a message like: “There are x occurrences of 4 in the array”.

//Variant1
const occurrences = [10, 4, 8, 4, 7, 4, 29, 4, 99];

const numberFilter = 4;

let count = occurrences.filter((elem) => elem == numberFilter).length;
console.log(`There are ${count} occurrences of ${numberFilter} in the array`);

//VAriant 2
const occurrences1 = [10, 4, 8, 4, 7, 4, 29, 4, 99];
const searchElement = 4;
const count1 = countOccurrences(occurrences1, searchElement);

function countOccurrences(array, searchElement) {
  let count = 0;
  for (let element of array) if (element === searchElement) count++;
  return count;
}
console.log(`There are ${count} occurrences of ${searchElement} in the array`);

//Remove all 4 from the array [10, 4, 8, 4, 7, 4, 29, 4, 99].

const removeArr = [10, 4, 8, 4, 7, 4, 29, 4, 99];
for (let i = 0; i < removeArr.length; i++) {
  if (removeArr[i] === 4) continue;
  console.log(removeArr[i]);
}

//Replace all 4 with 999 in the array [10, 4, 8, 4, 7, 4, 29, 4, 99].

const replaceArr = [10, 4, 8, 4, 7, 4, 29, 4, 99];
const newNumber = 999;
for (let i = 0; i < replaceArr.length; i++) {
  if (replaceArr[i] === 4) replaceArr[i] = newNumber;
}

console.log(replaceArr);

// Create a function that has an array as a parameter. The function should return true if the array has more than 3 occurrences of 7. Use both approaches with for and while. Example: for [10, 7, 8, 4, 7, 4, 29, 4, 99] the function returns false, [1, 2, 3] also returns false, but for [10, 7, 8, 7, 4, 7, 4, 29, 7, 4, 7, 7, 99] the function returns true.

const paramArray = [10, 7, 8, 4, 7, 4, 29, 4, 99];
const paramArray1 = [1, 2, 3];
const paramArray2 = [10, 7, 8, 7, 4, 7, 4, 29, 7, 4, 7, 7, 99];

//While approach

function checkOccurrences(...array) {
  const seven = 7;

  const newCheck = array.filter((elem) => elem == seven).length;
  while (newCheck > 3) return true;
  return false;
}

console.log(checkOccurrences(...paramArray2));
