// ]
// You have an array of cars
const arr = [
  { id: 1, name: "Volkswagen", year: 2012, color: "blue" },
  { id: 2, name: "BMW", year: 2021, color: "black" },
  { id: 3, name: "Ford", year: 2015, color: "red" },
  { id: 4, name: "Dacia", year: 2023, color: "pink" },
  { id: 5, name: "Renault", year: 2014, color: "black" },
  { id: 6, name: "Volkswagen", year: 2022, color: "blue" },
  { id: 7, name: "Volvo", year: 2001, color: "black" },
];
// Create a function named displayDetails that calls another 2 functions, you should have something like
// function displayNames() {
//     displayCarNames();
//     displayBlackCarNames();
// The output in the console should look like:
// We have the cars: Volkswagen, BMW, Ford, Dacia, Renault, Volkswagen, Volvo,
// The black cars are: BMW, Renault, Volvo,

function displayDetails(cars) {
  displayCarNames(cars);
  displayBlackCarNames(cars);
}

displayDetails(arr);

function displayCarNames(cars) {
  let nameOfTheCars = "";
  for (let car of cars) {
    nameOfTheCars += car.name + ", ";
  }
  nameOfTheCars = nameOfTheCars.slice(0, nameOfTheCars.length - 2);
  console.log(`We have the cars:${nameOfTheCars}`);
}
// displayCarNames(arr);

function displayBlackCarNames(cars) {
  let nameOfTheCars = "";
  for (let car of cars) {
    if (car.color === "black") {
      nameOfTheCars = nameOfTheCars + ", " + car.name;
    }
  }
  console.log(`The black cars are: ${nameOfTheCars}`);
}
// displayBlackCarNames(arr);
