// You have an array of odd length. Make the sum of the first half and the difference of the second half. Afterwards, make the sum of them and replace the middle value with it. Example: [10, 20, 30, 9999, 9, 3, 1]. The sum of the first half is 60, the difference of the last half is 5. The sum of them is 65. You have to replace 9999 with 65.

// ---------- 0   1   2    3    4  5  6  7
const arr2 = [10, 20, 30, 9999, 9, 3, 1];
let sumOfFirstHalf = 0;
let difOfSecondHalf = arr2[Math.floor(arr2.length / 2) + 1];
let sum1 = 0;

function sumAndDifference(num) {
  for (let i = 0; i < num.length; i++) {
    if (i < num.length / 2 - 1) {
      sumOfFirstHalf += num[i];
    }

    if (i > num.length / 2 + 1) {
      difOfSecondHalf = difOfSecondHalf - num[i];
    }
  }
  num[Math.floor(arr2.length / 2)] = sumOfFirstHalf + difOfSecondHalf;
  console.log(num);
}
sumAndDifference(arr2);

// i = 0, num[0] = 10, 0 < 3.5  ---> sumOfFirstHalf = 0  + 10 = 10
// i = 1, num[1] = 20, 1 < 3.5  ---> sumOfFirstHalf = 10 + 20 = 30
// i = 2, num[2] = 30, 2 < 3.5  ---> sumOfFirstHalf = 30 + 30 = 60
// i = 3, num[3] = 9999, 3 < 3.5 - 1

// *** i = 4, num[4] = 9, 4 > 4.5  ---> difOfSecondHalf = difOfSecondHalf - num[4] = 9 - 9 = 0
// i = 5, num[5] = 3, 5 > 4.5  ---> difOfSecondHalf = difOfSecondHalf - num[5] = 9 - 3 = 6
// i = 6, num[6] = 1, 6 > 4.5  ---> difOfSecondHalf = difOfSecondHalf - num[6] = 6 - 1 = 5

// ------------- 0   1   2    3    4  5  6  7
// const arr2 = [10, 20, 30, 9999, 9, 3, 1];
