//Replace all 4 with 999 in the array [10, 4, 8, 4, 7, 4, 29, 4, 99].

const replaceArr = [10, 4, 8, 4, 7, 4, 29, 4, 99];
const newNumber = 999;
for (let i = 0; i < replaceArr.length; i++) {
  if (replaceArr[i] === 4) replaceArr[i] = newNumber;
}

console.log(replaceArr);
