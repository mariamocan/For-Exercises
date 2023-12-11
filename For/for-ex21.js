// Swap the values of the array like in the examples:

// [10, 20, 3000, 4000, 5,6] → [20, 10, 4000, 3000, 6, 5]

// [‘a’, ‘b’, ‘x’, ‘y’] → [‘b’, ‘a’, ‘y’, ‘x’]

// If the array has an odd length, the last position remains unswapped: [1, 2, 3] → [2, 1, 3]
//-----------0   1    2     3    4  5
const arr = [10, 20, 3000, 4000, 5, 6];

function swapValues(arr) {
  for (let i = 0; i < arr.length; i = i + 2) {
    const aux = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = aux;
    if (arr.length % 2 === 1) {
      i = arr[i];
    }
  }
  console.log(arr);
}
swapValues(arr);
swapValues(["a", "b", "x", "y"]);
// -------- 0  1  2
swapValues([1, 2, 3]);
// i = 0; arr[i]=arr[0]=10; --------- arr[i+1]=arr[1]=20
// --------------------------------------------i = 1; arr[i]=arr[1]=20; --------- arr[i+1]=arr[2]=3000
// i = 2; arr[i]=arr[2]=3000; ------- arr[i+1]=arr[3]=4000
//-------------------------------------------- i = 3; arr[i]=arr[3]=4000; ------- arr[i+1]=arr[4]=5
// i = 4; arr[i]=arr[4]=5;----------  arr[i+1]=arr[5]=6
// --------------------------------------------i = 5; arr[i]=arr[5]=6; ---------- arr[i+1]=arr[6]=undefined
