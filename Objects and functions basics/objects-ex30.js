// You have the array of cars from exercise 22. Create a function that filters the cars using a callback as a parameter. The function should look like
// function searchCarsBy(carPropertiesFn)
// Example:
// searchCarsBy(car => car.year === 2012);  // will return all the cars from year 2012
// searchCarsBy(car => car.color === 'black'); // will return all the black cars
// searchCarsBy(car => car.year === 2012 && car.color === 'black'); // will return all the black cars from 2012
const cars = [
  { id: 1, name: "Volkswagen", year: 2012, color: "blue", isOld: true },
  { id: 2, name: "BMW", year: 2021, color: "black" },
  { id: 3, name: "Ford", year: 2015, color: "red" },
  { id: 4, name: "Dacia", year: 2012, color: "pink" },
  { id: 5, name: "Renault", year: 2014, color: "black", isOld: true },
  { id: 6, name: "Volkswagen", year: 2022, color: "blue" },
  { id: 7, name: "Volvo", year: 2012, color: "black", isOld: true },
];

function filterCarsBy(carPropertiesFn) {
  let filteredCars = [];
  for (let car of cars) {
    let conditionIsMeet = carPropertiesFn(car);
    if (conditionIsMeet) {
      filteredCars.push(car.name);
    }
  }
  return filteredCars;
}
// console.log(filterCarsBy((car) => car.year === 2012));
// console.log(filterCarsBy((car) => car.color === "black"));
console.log(filterCarsBy((car) => car.year === 2012 && car.color === "black"));
