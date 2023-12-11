console.log("Lucrare de control");
//  0   1    2   3   4   5   6
// [10, 20, 30, 40, 30, 20, 10] // true
// [1, 2, 3, 4, 1] // false
// [1, 2, 3, 2, 1] // true

function isPalindrome(arr) {
  let isPalindrome = true;
  let theMiddle = Math.floor(arr.length / 2);

  for (let i = 0; i < theMiddle; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  console.log(isPalindrome);
}

isPalindrome([20, 20, 30, 40, 30, 20, 10]); // false
isPalindrome([10, 20, 30, 40, 30, 20, 10]); // true
// isPalindrome([1, 5, 4]);
// isPalindrome([1, 2, 3, 2, 1]);

// i = 0 arr[0] =10  arr[arr.length - 1 - i]=arr[7 - 1 - 0]=arr[6]=10
// i = 1 arr[1] =20  arr[arr.length - 1 - i]=arr[7 - 1 - 1]=arr[5]=20
// i = 2 arr[2] =30  arr[arr.length - 1 - i]=arr[7 - 1 - 2]=arr[4]=30
// i = 3 arr[3] =40  arr[arr.length - 1 - i]=arr[7 - 1 - 3]=arr[3]=40
// i = 4 arr[4] =30  arr[arr.length - 1 - i]=arr[7 - 1 - 4]=arr[2]=30
// i = 5 arr[5] =20  arr[arr.length - 1 - i]=arr[7 - 1 - 5]=arr[1]=20
// i = 6 arr[6] =10  arr[arr.length - 1 - i]=arr[7 - 1 - 6]=arr[0]=10
