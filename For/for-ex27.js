// You have the array [{id: 1, firstName: ‘’Bob”, lastName: “Bobby”}, {id: 2, firstName: ‘’Dob”, lastName: “Dobby''}, {id: 3, firstName: ‘’Bob”, lastName: “Hobby”}, {id: 4, firstName: “Tob”, lastName: “Tobby”}, {id: 5, firstName: ‘’Bob”, lastName: “Zobby”}]. I want only the IDs of the users which have the first name “Bob”, i.e. I want to display the array: [1, 3, 5]. I want two approaches to solve the same problem: one with native for’s and another one using the native array methods.

const arr = [
  { id: 1, firstName: "Bob", lastName: "Bobby" },
  { id: 2, firstName: "Dob", lastName: "Dobby" },
  { id: 3, firstName: "Bob", lastName: "Hobby" },
  { id: 4, firstName: "Tob", lastName: "Tobby" },
  { id: 5, firstName: "Bob", lastName: "Zobby" },
];

//Native for
let bobIndex = [];

function filterArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].firstName === "Bob") {
      bobIndex.push(arr[i].id);
    }
  }
  console.log(bobIndex);
}
filterArray(arr);

//Native array method

arr.filter((arr) => {
  if (arr.firstName === "Bob") console.log(arr.id);
});
