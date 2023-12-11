// You have the array of cars from exercise 25. Create a function that adds a function to all the cars and that prints the name and the color of each car.

const arr = [
  { id: 1, name: "Volkswagen", year: 2012, color: "blue", isOld: true },
  { id: 2, name: "BMW", year: 2021, color: "black" },
  { id: 3, name: "Ford", year: 2015, color: "red" },
  { id: 4, name: "Dacia", year: 2012, color: "pink" },
  { id: 5, name: "Renault", year: 2014, color: "black", isOld: true },
  { id: 6, name: "Volkswagen", year: 2022, color: "blue" },
  { id: 7, name: "Volvo", year: 2012, color: "black", isOld: true },
];

addFunctionThatPrints();
function addFunctionThatPrints() {
  for (let car of arr) {
    car.printDetails = printNameAndColor;
  }
}

function printNameAndColor() {
  console.log(this.name, this.color);
}

arr[2].printDetails();
