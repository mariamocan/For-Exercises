// You have an array of cars
let arrOfCars = [
  { id: 1, name: "Volkswagen", year: 2012, color: "blue" },
  { id: 2, name: "Volkswagen", year: 2021, color: "black" },
  { id: 3, name: "Volkswagen", year: 2015, color: "red" },
  { id: 4, name: "Volkswagen", year: 2023, color: "pink" },
  { id: 5, name: "Volkswagen", year: 2014, color: "black" },
  { id: 6, name: "Volkswagen", year: 2022, color: "blue" },
  { id: 7, name: "Volkswagen", year: 2001, color: "black" },
];
// Create a function that has the array of cars as parameter and returns another array with all the cars with year > 2020.
function carsWithYearGraterThanTwentyTwenty(cars) {
  let newArrOfCars = [];
  for (let car of cars) {
    if (car.year > 2020) {
      newArrOfCars.push(car);
    }
  }
  return newArrOfCars;
}
console.log(carsWithYearGraterThanTwentyTwenty(arrOfCars));

// Create a function that has the array of cars as parameter and another parameter called color and returns another array with all the cars matching the color.

function matchingColors(arr, color) {
  let matchingCars = [];
  for (let car of arr) {
    if (car.color === color) {
      matchingCars.push(car);
    }
  }
  return matchingCars;
}
console.log(matchingColors(arrOfCars, "black"));
