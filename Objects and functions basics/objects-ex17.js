// You have the array of cars from exercise 16. If the car is older than or equal to 2014, add a boolean isOld to each object from the array. After the changes, the array should look like:
// const arr = [
//     { id: 1, name: 'Volkswagen', year: 2012, color: 'blue', isOld: true },
//     { id: 2, name: 'BMW', year: 2021, color: 'black' },
//     { id: 3, name: 'Ford', year: 2015, color: 'red' },
//     { id: 4, name: 'Dacia', year: 2023, color: 'pink' },
//     { id: 5, name: 'Renault', year: 2014, color: 'black', isOld: true },
//     { id: 6, name: 'Volkswagen', year: 2022, color: 'blue' },
//     { id: 7, name: 'Volvo', year: 2001, color: 'black', isOld: true },
// ]
const arr = [
  { id: 1, name: "Volkswagen", year: 2012, color: "blue" },
  { id: 2, name: "BMW", year: 2021, color: "black" },
  { id: 3, name: "Ford", year: 2015, color: "red" },
  { id: 4, name: "Dacia", year: 2023, color: "pink" },
  { id: 5, name: "Renault", year: 2014, color: "black" },
  { id: 6, name: "Volkswagen", year: 2022, color: "blue" },
  { id: 7, name: "Volvo", year: 2001, color: "black" },
];

function carsOlderThanOrEqualTo(cars) {
  for (let car of cars) {
    if (car.year <= 2014) {
      car.isOld = true;
    }
  }
  console.log(cars);
}
console.log(carsOlderThanOrEqualTo(arr));
