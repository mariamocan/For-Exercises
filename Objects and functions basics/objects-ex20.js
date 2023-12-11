// You have the array of recipes
const recipes = [
  {
    name: "Pasta Carbonara",
    ingredients: [
      { name: "spaghetti", price: 2.49, isVegetable: false },
      { name: "eggs", price: 1.99, isVegetable: false },
      { name: "bacon", price: 4.79, isVegetable: false },
      { name: "Parmesan cheese", price: 3.29, isVegetable: false },
      { name: "black pepper", price: 1.49, isVegetable: false },
    ],
    cuisine: "Italian",
    difficulty: "Medium",
  },
  {
    name: "Chicken Stir-Fry",
    ingredients: [
      { name: "chicken breast", price: 5.99, isVegetable: false },
      { name: "bell peppers", price: 2.79, isVegetable: true },
      { name: "broccoli", price: 1.99, isVegetable: true },
      { name: "soy sauce", price: 3.49, isVegetable: false },
      { name: "garlic", price: 1.29, isVegetable: true },
    ],
    cuisine: "Asian",
    difficulty: "Easy",
  },
  {
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
  },
  {
    name: "Tacos",
    ingredients: [
      { name: "tortillas", price: 2.19, isVegetable: false },
      { name: "ground beef", price: 6.49, isVegetable: false },
      { name: "lettuce", price: 1.49, isVegetable: true },
      { name: "tomatoes", price: 2.99, isVegetable: true },
      { name: "cheddar cheese", price: 4.29, isVegetable: false },
    ],
    cuisine: "Mexican",
    difficulty: "Easy",
  },
  {
    name: "Ratatouille",
    ingredients: [
      { name: "eggplant", price: 3.29, isVegetable: true },
      { name: "zucchini", price: 2.99, isVegetable: true },
      { name: "bell peppers", price: 2.79, isVegetable: true },
      { name: "tomatoes", price: 2.99, isVegetable: true },
      { name: "onions", price: 1.99, isVegetable: true },
    ],
    cuisine: "French",
    difficulty: "Hard",
  },
];
// Extract all the vegetables from each recipe in a separate array and assign it to the recipe
// Extract all the vegetables from all recipes in a separate array and store it in a variable

function extractVegetables(recipes) {
  let allVegetablesMethod1 = [];
  let allVegetables = [];
  for (let recipe of recipes) {
    let vegetables = [];
    for (let ingredient of recipe.ingredients) {
      if (ingredient.isVegetable === true) {
        vegetables.push(ingredient.name);
        allVegetablesMethod1.push(ingredient.name);
      }
    }
    recipe.vegetables = vegetables;
    allVegetables.push(recipe.vegetables);
  }

  // Method 1
  console.log(allVegetablesMethod1);

  // Method 2
  // let arrayOfAllVegetables = combineArrays(...allVegetables);
  // console.log(arrayOfAllVegetables);
}

extractVegetables(recipes);
// console.log(recipes);

function combineArrays(...arr) {
  let combine = [];
  for (let i = 0; i < arr.length; i++) {
    combine.push(...arr[i]);
  }
  return combine;
}
// console.log(combineArrays([1, 2, 3], [1, 2, 3], [1, 2, 3]));
