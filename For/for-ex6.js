//Remove all 4 from the array [10, 4, 8, 4, 7, 4, 29, 4, 99].

const removeArr = [10, 4, 8, 4, 7, 4, 29, 4, 99];
for (let i = 0; i < removeArr.length; i++) {
  let index = removeArr.indexOf(4);
  if (index !== -1) {
    removeArr.splice(index, 1);
  }
}
console.log(removeArr);
