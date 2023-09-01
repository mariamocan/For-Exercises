// 12.	Open the console and type [...'Coconut']. As you can see, the result of this is an array of letters. Create a function called checkForDuplicateLetters that has a string as a parameter. The function should return true if the given string has duplicate letters. For example, when you call the function with the parameter Coconut will return true, i.e. checkForDuplicateLetters(‘Coconut’) will return true. Other examples: checkForDuplicateLetters(‘Dodonut’) will return true, checkForDuplicateLetters(‘Hello’) will return true, checkForDuplicateLetters(‘abcdefgh’) will return false, checkForDuplicateLetters(‘abca’) will return true, checkForDuplicateLetters(‘importance’) will return false

//Variant1
function checkForDuplicateLetters(str) {
  let isDuplicate = false;
  const arr = [...str];
  // ['C', 'o', 'd', 'o', 'n', 'u', 't']
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] === arr[j]) {
          isDuplicate = true;
          break;
        }
      }
    }
  }
  if (isDuplicate) {
    return true;
  }
  return false;
}
console.log(checkForDuplicateLetters("abcdefg"));

//Variant2
function checkForDuplicateLetters(str) {
  let isDuplicate = false;
  const arr = [...str];
  // ['C', 'o', 'd', 'o', 'n', 'u', 't']
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        isDuplicate = true;
        break;
      }
    }
  }
  if (isDuplicate) {
    return true;
  }
  return false;
}

//Variant3

let toSearch = [];
let result = false;
function duplicates(str) {
  // ['a', 'b', 'c', 'd']
  let arr = [...str];
  for (let i = 0; i < arr.length; i++) {
    if (toSearch[arr[i]]) {
      result = true;
      break;
    }

    toSearch[arr[i]] = true;
  }

  if (result) {
    return true;
  } else {
    return false;
  }
}
console.log(duplicates("abcdef"));
console.log(duplicates("mimimimi"));
