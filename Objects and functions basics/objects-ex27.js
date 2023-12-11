// You have an object
// { id: 1, name: 'Volkswagen', year: 2012, color: 'blue', isOld: true }
// Create a function with the following signature
// function displayCarDetails(carFn)
// When you call it like
// displayCarDetails(car => `The car is from ${car.year} has the color ${car.color}` );
// displayCarDetails(car => `Year: ${car.year}; Color ${car.color}` );
// it should display the messages.

function displayCarDetails(carFn) {
  let car = {
    id: 1,
    name: "Volkswagen",
    year: 2012,
    color: "blue",
    isOld: true,
  };
  carFn(car);
}

displayCarDetails((car) =>
  console.log(`The car is from ${car.year}  has the color ${car.color});`)
);

displayCarDetails((car) =>
  console.log(`Year: ${car.year}; Color: ${car.color}`)
);
