const myProduct = {
  id: 1,
  name: "Onion",
  price: 2,
  currency: "ron",
};
// return function
function getProductDetails(product) {
  // return `${product.id}, ${product.name}, ${product.price}`;
  return product.id + " " + product.name + " " + product.price;
}

// void function
function displayProductDetails(product) {
  console.log(product.id, product.name, product.price);
}

// details is a string because getProductDetails returns a string
// this means we can use all the methods that can be found on "string"
const details = getProductDetails(myProduct);
console.log(details);
console.log(details.includes("Onion"));

function getProductWithSale(product) {
  product.sale = 10;
  return product;
}

// here I passed the reference of myProduct to the function getProductWithSale
// but inside the function I returned the same reference
// hence, productWithSale is the same as myProduct
const productWithSale = getProductWithSale(myProduct);
console.log(productWithSale.name + " " + productWithSale.sale);

const myStudent = {
  firstName: "Bob",
  lastName: "Bobby",
  grade1: 10,
  grade2: 10,
};

// here I passed the reference of myStudent to the function getStudentWithAverage
// and I returned another reference of another object (that has the properties:
// name and average)
function getStudentWithAverage(student) {
  const average = (student.grade1 + student.grade2) / 2;

  return {
    name: student.firstName + " " + student.lastName,
    average: average,
  };
}

const studentWithAverage = getStudentWithAverage(myStudent);
console.log(studentWithAverage.name, studentWithAverage.average);

const anotherStudent = {
  firstName: "Bob",
  lastName: "Bobby",
  grades: [9, 8, 7],
};

function getStudentWithAverage2(student) {
  let sum = 0;
  for (let grade of student.grades) {
    sum += grade;
    // return sum; // IF YOU UNCOMMENT THIS IT WILL RETURN ONLY A NUMBER
  }
  return {
    name: student.firstName,
    average: sum / student.grades.length,
  };
}

const studentWithAverage2 = getStudentWithAverage2(anotherStudent);
console.log(studentWithAverage2);
