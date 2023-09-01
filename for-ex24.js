// Salut, încearcă sa faci asta: [10, 20, 3000, 4000, 5,6] → [2000, 10, 36000000000, 3000, 150, 5] (adică array-ul cu termenii ridicati la putere [20*10*10, 10, 4000*3000*3000, 3000, 6*5*5, 5])

const arr = [10, 20, 3000, 4000, 5, 6];

function swapAndRaiseToPower(num) {
  for (let i = 0; i < arr.length; i = i + 2) {
    let swap = arr[i];
    arr[i] = arr[i + 1] * arr[i] * arr[i];
    arr[i + 1] = swap;
  }
  console.log(arr);
}
swapAndRaiseToPower(arr);
