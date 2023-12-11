// Provide a function that takes in two numbers and a callback function. The callback function should either add or multiply the two numbers together based on its implementation. I.e. the function signature should look like
// function calculate(num1, num2, operationCallback)
// and should be called like
// console.log(calculate(5, 3, add)); // Outputs: 8
// console.log(calculate(5, 3, multiply)); // Outputs: 15
// where add and multiply are the callbacks.
// 	Note: This exercise is not a big deal. Don’t expect to write much code inside the calculate function.

function calculate(num1, num2, operationCallback) {
  let result = operationCallback(num1, num2);
  return result;
}

function sum(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(calculate(5, 5, multiply));
console.log(calculate(5, 5, sum));
