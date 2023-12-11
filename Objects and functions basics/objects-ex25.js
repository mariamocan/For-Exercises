// You have the array of cars
const cars = [
  { id: 1, name: "Volkswagen", year: 2022, color: "blue", isOld: true },
  { id: 2, name: "BMW", year: 2021, color: "black" },
  { id: 3, name: "Ford", year: 2015, color: "red" },
  { id: 4, name: "Dacia", year: 2012, color: "pink" },
  { id: 5, name: "Renault", year: 2014, color: "black", isOld: true },
  { id: 6, name: "Volkswagen", year: 2022, color: "blue" },
  { id: 7, name: "Volvo", year: 2012, color: "black", isOld: true },
];
// Create a function that filters the cars by a given property. The function signature should look like:
// function searchCarsBy(carProperties)
// Example:
// searchCarsBy({year: 2012}); // will return all the cars from year 2012
// searchCarsBy({color: 'black'}); // will return all the cars with color black
// searchCarsBy({year: 2012, color: 'black'}); // returns all the black cars from 2012
// searchCarsBy({year: 2012, color: 'black', isOld: true}); // returns all the black cars from 2012 that have the flag isOld set to true

function filterByProperty(carProperties) {
  const filteredCars = [];
  for (let car of cars) {
    // console.log(cars);

    if (
      carProperties.year &&
      carProperties.color &&
      carProperties.isOld !== undefined &&
      car.year === carProperties.year &&
      car.color === carProperties.color &&
      car.isOld === carProperties.isOld
    ) {
      filteredCars.push(car.name);
    } else if (
      carProperties.year &&
      carProperties.color &&
      car.year === carProperties.year &&
      car.color === carProperties.color
    ) {
      filteredCars.push(car.name);
    } else if (Object.keys(carProperties).length === 1) {
      if (car.id === carProperties.id) {
        filteredCars.push(car.name);
      }
      if (car.name === carProperties.name) {
        filteredCars.push(car.name);
      }

      if (car.year === carProperties.year) {
        filteredCars.push(car.name);
      }

      if (car.color === carProperties.color) {
        filteredCars.push(car.name);
      }

      if (car.isOld !== undefined && car.isOld === carProperties.isOld) {
        filteredCars.push(car.name);
      }
    }
  }
  return filteredCars;
}

console.log(filterByProperty({ year: 2022, color: "blue" }));
