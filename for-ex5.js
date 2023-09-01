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
