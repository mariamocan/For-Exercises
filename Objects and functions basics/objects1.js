// NESTED OBJECTS (one level)
// const student = {
//   id: 1,
//   nume: "Ion",
//   note: [10, 8, 9],
// };

// // Approach 1
// for (let i = 0; i < student.note.length; i++) {
//   console.log(student.note[i]);
// }

// // Approach 2
// for (let nota of student.note) {
//   console.log(nota);
// }

// NESTED OBJECTS (two levels)
// const student = {
//   id: 1,
//   nume: "Ion",
//   note: [
//     { id: 100, nume: "Romana", nota: 10 },
//     { id: 101, nume: "Matematica", nota: 9 },
//     { id: 102, nume: "Matematica", nota: 8 },
//   ],
// };

// for (let nota of student.note) {
//   console.log(`Materie: ${nota.nume}, Nota: ${nota.nota}`);
// }

// Array of objects

// const student1 = {
//   id: 1,
//   nume: "Ion",
//   note: [
//     { id: 100, nume: "Romana", nota: 10 },
//     { id: 101, nume: "Matematica", nota: 9 },
//     { id: 102, nume: "Matematica", nota: 8 },
//   ],
// };

// const student2 = {
//   id: 2,
//   nume: "Gheorghe",
//   note: [
//     { id: 100, nume: "Romana", nota: 5 },
//     { id: 101, nume: "Matematica", nota: 8 },
//     { id: 102, nume: "Matematica", nota: 6 },
//   ],
// };

// const studenti = [student1, student2];

// // Ion 10, 9, 8
// // Gheorghe 5, 8, 6

// for (let student of studenti) {
//   let note = "";
//   for (let nota of student.note) {
//     note += nota.nota + ", ";
//   }
//   console.log(student.nume, note);
// }

// Difference primitives and objects when assigning them to another variable.

const product = {
  id: 1,
  name: "Onion",
  price: 2,
  currency: "ron",
};

const product2 = product;
console.log(product === product2);
product2.price = 3; // the price is changed also on product 2 because the REFERENCE is assigned

let price = 2100;
let price2 = price; // the price is NOT changed on product 2 because the VALUE is assigned

// Passing primitives to functions. Passing objects to functions

// When you pass an object to a function you pass the REFERENCE
// When you pass a primitive to a function you pass the VALUE
function changePriceOfProduct(product, newPrice) {
  product.price = newPrice;
}

changePriceOfProduct(product, price);
console.log(product);
console.log(product2);
