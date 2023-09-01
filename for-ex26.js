// Și asta: Use a for to reverse an array, i.e.: [4, 5, 6, 7] → [7, 6, 5, 4]

const arr = [4, 5, 6, 7];

function reverseArray(num) {
  for (let i = num.length; i >= 0; i--) {
    console.log(num[i]);
  }
}

reverseArray(arr);
