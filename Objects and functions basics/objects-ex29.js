// You have the object from 28. Create a function that uses a callback (similar to 28) that logs the total price of the ingredients.

function displayPrice(recipeFn) {
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
  return recipeFn(recipe.ingredients);
}

function displayTotalPriceOfIngredients(ingredients) {
  let sum = 0;
  for (let ingredient of ingredients) {
    sum += ingredient.price;
  }
  return sum;
}

console.log(displayPrice(displayTotalPriceOfIngredients));
