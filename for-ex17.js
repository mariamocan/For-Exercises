// You have an array. If the value of the array is divisible by 1000, console.log the previous value and the next two values. If the previous value doesn't exist or the next two values do not exist, display a message. E.g.:
// For the array [1, 9, 3, 8000, 6, 7, 1, 4, 9, 2000, 2, 3, 5] you need to display 3, 6, 7 (but not 8000) and 9, 2, 3 (but not 2000)
// For the array [5, 1, 9, 5000, 8, 7, 1000, 4, 9, 2000] you need to display 9, 8, 7 for 5000 and 7, 4, 9 for 1000 and 9 for 2000 + the message “The next 2 values of 2000 doesn’t exist”
// For the array [1000, 9, 3, 8000, 6, 7] you need to display the message “The previous value of 1000 doesn’t exist” and the numbers 9, 3. Also display 3, 6, 7 for 8000.

function divisibleNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (number % 1000 === 0) {
      if (i === 0) {
        console.log(`The previous value of ${arr[i]} does not exist`);
      } else {
        console.log(arr[i - 1]);
      }
      if (i >= arr.length - 2) {
        console.log(`The next 2 values of ${arr[i]} does not exist`);
      } else {
        console.log(arr[i + 1], arr[i + 2]);
      }
    }
  }
}
console.log(divisibleNumber([5, 1, 9, 5000, 8, 7, 1000, 4, 9, 2000]));
