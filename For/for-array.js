function filterArray(arr, myFunction) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    myFunction(arr[i], i);
    // if (arr[i].name === elementToSearch) {
    //   result.push(arr[i]);
    // }
  }
  return result;
}

let arr = [100, 200, 300];

filterArray(arr, (val, i) => {
  console.log(val, i);
});
