// // Display the Fibonacci numbers until 100, i.e. 0, 1, 1, 2 (= 1+1), 3(=2+1), 5(=3+2), 8(=5+3), 13(=8+5 etc), 21, 34, 55, 89

function fibbonaciNum(num) {
  let currentNumber = 0;
  let arr = [0, 1];
  for (let i = 1; i < arr.length; i++) {
    currentNumber = arr[i] + arr[i - 1];
    if (currentNumber <= num) {
      arr.push(currentNumber);
    }
  }
  return arr;
}

console.log(fibbonaciNum(100));
