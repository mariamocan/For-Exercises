// You an array of objects that represents some products, e.g.
// [{id: 1, name: ‘’Apple”, price: 10, ingredients: []},
// {id: 2, name: ‘’Onion”, price: 2, ingredients: []},
// {id: 3, name: ‘’Olives with spices”, price: 12,
// ingredients: [{name: ‘Olives’, allergens: []}, {name: “pepper”, allergens: []},
// {name: “salt”, allergens: []}]
// },
// {id: 4, name: ‘’Olives with cheese”, price: 12,
// ingredients: [{name: ‘Olives’, allergens: []}, {name: “pepper”, allergens: []},
// {name: “milk”, allergens: [‘milk’]}]
// },
// {id: 5, name: ‘’Bread”, price: 6,
//          ingredients: [{name: ‘flour’, allergens: [‘gluten’]}, {water: “pepper”, allergens: []}],
// },
// ]
// Create a function that console logs all the allergens of the products, i.e.
// Olives with cheese has the following alergens: milk, gluten
// Onion has the following alergens: ...
// Onion has the following alergens: ...

const arr = [
  { id: 1, name: "Apple", price: 10, ingredients: [] },
  { id: 2, name: "Onion", price: 2, ingredients: [] },
  {
    id: 3,
    name: "Olives with spices",
    price: 12,
    ingredients: [
      { name: "Olives", allergens: [] },
      { name: "pepper", allergens: [] },
      { name: "salt", allergens: [] },
    ],
  },
  {
    id: 4,
    name: "Olives with cheese",
    price: 12,
    ingredients: [
      { name: "Olives", allergens: [] },
      { name: "pepper", allergens: [] },
      { name: "milk", allergens: ["lactose", "lactose 2"] },
    ],
  },
  {
    id: 5,
    name: "Bread",
    price: 6,
    ingredients: [
      { name: "flour", allergens: ["gluten"] },
      { water: "pepper", allergens: [] },
    ],
  },
];

function displayAllergens(products) {
  for (const product of products) {
    let allAlergens = "";

    for (const ingredient of product.ingredients) {
      for (const allergen of ingredient.allergens) {
        allAlergens = allAlergens + " " + allergen;
      }
    }

    if (allAlergens) {
      console.log(
        `The product: ${product.name} has the following allergens: ${allAlergens}`
      );
    }
  }
}

displayAllergens(arr);
