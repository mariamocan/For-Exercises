// 11.	Compute the sum of the digits in a number. Create a function for doing this. Examples: digitSum(14) will return 5, digitSum(1234) will return 10, digitSum(100) will return 1.
function digits(n) {
  let result = 0;

  while (n > 0) {
    result += n % 10;
    n = Math.floor(n / 10);
  }

  return result;
}
console.log(digits(1234));
