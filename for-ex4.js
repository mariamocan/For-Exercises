// You have the array: [21, 35, 20, 5, 60, 7, 14, 8, 88, 99, 123, 55, 11, 66, 2]. Compute the sum of the numbers that divide by 7 from the odd positions.

const arr4 = [21, 35, 20, 5, 60, 7, 14, 8, 88, 99, 123, 55, 11, 66, 2];
let sum = 0;
function sumOfNUm(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 7 === 0 && i % 2 === 1) {
      sum += num[i];
    }
  }
  console.log(sum);
}
sumOfNUm(arr4);
