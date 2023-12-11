// Create a function that has an array as a parameter. The function should return true if the array has more than 3 occurrences of 7. Use both approaches with for and while. Example: for [10, 7, 8, 4, 7, 4, 29, 4, 99] the function returns false, [1, 2, 3] also returns false, but for [10, 7, 8, 7, 4, 7, 4, 29, 7, 4, 7, 7, 99] the function returns true.

const paramArray = [10, 7, 8, 4, 7, 4, 29, 4, 99];
const paramArray1 = [1, 2, 3];
const paramArray2 = [10, 7, 8, 7, 4, 7, 4, 29, 7, 4, 7, 7, 99];

//While approach

function checkOccurrences(array) {
  const seven = 7;

  const newCheck = array.filter((elem) => elem === seven).length;
  while (newCheck > 3) return true;
  return false;
}

console.log(checkOccurrences(paramArray2));

//for approach

function newCheckoccurrences(arr, searchElement) {
  let count = 0;
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      count++;
      if (count >= 3) {
        found = true;
      }
    }
  }
  console.log(found);
}

newCheckoccurrences([paramArray], 7);
