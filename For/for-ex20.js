// You// have an array. If the value is divisible by 5 and it’s not the first or the last value in the array, we display it.
// For the array [50, 6, 30, 1, 4, 2000, 6, 7, 8, 9, 10] we display only 30 and 2000

// function valueDivisibleByFive(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 === 0 && i !== 0 && i !== arr.length - 1)
//       console.log(arr[i]);
//   }
// }

function valueDivisibleByFive(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] % 5 === 0) console.log(arr[i]);
  }
}
valueDivisibleByFive([50, 6, 30, 1, 4, 2000, 6, 7, 8, 9, 10]);
