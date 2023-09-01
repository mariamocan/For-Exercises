// Implement a “filter” function.
// [{id: 1, name: 'A'}, {id: 2, name: 'B'}, {id: 3, name: 'C'}, {id: 4, name: 'C'}].filter(user => user.name === 'C')
// returns
// {id: 3, name: 'C'} {id: 4, name: 'C'}

const arrofUsers = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
  { id: 4, name: "C" },
];
function filterArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === "C") console.log(arr[i]);
  }
}
filterArray(arrofUsers);
