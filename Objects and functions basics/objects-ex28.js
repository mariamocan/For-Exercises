// You have an object
// {
//     name: "Vegetable Lasagna",
//     ingredients: [
//       { name: "lasagna noodles", price: 3.99, isVegetable: false },
//       { name: "tomato sauce", price: 2.29, isVegetable: true },
//       { name: "ricotta cheese", price: 4.49, isVegetable: false },
//       { name: "spinach", price: 2.99, isVegetable: true },
//       { name: "mozzarella cheese", price: 3.79, isVegetable: false }
//     ],
//     cuisine: "Italian",
//     difficulty: "Medium"
//   }
// Create a function with the signature
// function displayVegetals(recipeFn)
// When you call it like
// const vegetables = displayVegetals(ingredients => {
//   const res = [];
//   for (const ingredient of ingredients) {
//     if (ingredient.isVegetable) {
//       res.push(ingredient.name)
//     }
//   }
//   return res;
// })
// console.log(vegetables);
// it should display the vegetables.

let recipe = {
  name: "Vegetable Lasagna",
  ingredients: [
    { name: "lasagna noodles", price: 3.99, isVegetable: false },
    { name: "tomato sauce", price: 2.29, isVegetable: true },
    { name: "ricotta cheese", price: 4.49, isVegetable: false },
    { name: "spinach", price: 2.99, isVegetable: true },
    { name: "mozzarella cheese", price: 3.79, isVegetable: false },
  ],
  cuisine: "Italian",
  difficulty: "Medium",
};

function displayVegetals(recipeFn) {
  const res = recipeFn(recipe.ingredients);
  return res;
}

const vegetables = displayVegetals((ingredients) => {
  const res = [];
  for (const ingredient of ingredients) {
    if (ingredient.isVegetable) {
      res.push(ingredient.name);
    }
  }
  return res;
});

console.log(vegetables);
