// You have the array of recipes
const recipes = [
  {
    name: "Pasta Carbonara",
    ingredients: [
      { name: "spaghetti", price: 2.49 },
      { name: "eggs", price: 1.99 },
      { name: "bacon", price: 4.79 },
      { name: "Parmesan cheese", price: 3.29 },
      { name: "black pepper", price: 1.49 },
    ],
    cuisine: "Italian",
    difficulty: "Medium",
  },
  {
    name: "Chicken Stir-Fry",
    ingredients: [
      { name: "chicken breast", price: 5.99 },
      { name: "bell peppers", price: 2.79 },
      { name: "broccoli", price: 1.99 },
      { name: "soy sauce", price: 3.49 },
      { name: "garlic", price: 1.29 },
    ],
    cuisine: "Asian",
    difficulty: "Easy",
  },
  {
    name: "Vegetable Lasagna",
    ingredients: [
      { name: "lasagna noodles", price: 3.99 },
      { name: "tomato sauce", price: 2.29 },
      { name: "ricotta cheese", price: 4.49 },
      { name: "spinach", price: 2.99 },
      { name: "mozzarella cheese", price: 3.79 },
    ],
    cuisine: "Italian",
    difficulty: "Medium",
  },
  {
    name: "Tacos",
    ingredients: [
      { name: "tortillas", price: 2.19 },
      { name: "ground beef", price: 6.49 },
      { name: "lettuce", price: 1.49 },
      { name: "tomatoes", price: 2.99 },
      { name: "cheddar cheese", price: 4.29 },
    ],
    cuisine: "Mexican",
    difficulty: "Easy",
  },
  {
    name: "Ratatouille",
    ingredients: [
      { name: "eggplant", price: 3.29 },
      { name: "zucchini", price: 2.99 },
      { name: "bell peppers", price: 2.79 },
      { name: "tomatoes", price: 2.99 },
      { name: "onions", price: 1.99 },
    ],
    cuisine: "French",
    difficulty: "Hard",
  },
];
// Calculate the price of each recipe and assign it to the recipe object.

function calculateThePrice(products) {
  for (let product of products) {
    let price = [];
    for (let ingredient of product.ingredients) {
      price.push(ingredient.price);
    }
    product.totalPrice = sum(price);
  }
}
calculateThePrice(recipes);
console.log(recipes);

function sum(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
