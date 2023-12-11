// You an array of objects that represents some products, e.g.
const productArr = [
  {
    id: 1,
    name: "Apple",
    price: 10,
    isExpiringToday: true,
  },
  {
    id: 2,
    name: "Onion",
    price: 2,
    isExpiringToday: false,
  },
  {
    id: 3,
    name: "Olive with spices",
    price: 12,
    isExpiringToday: false,
  },
  {
    id: 4,
    name: "Olive with cheese",
    price: 12,
    isExpiringToday: true,
  },
  {
    id: 5,
    name: "Bread",
    price: 6,
    isExpiringToday: false,
  },
];

// Create a function that takes the array as a parameter and modifies the price by applying a sale of 50% for the products that are expiring today.

function saleProduct(arr) {
  for (let product of arr) {
    if (product.isExpiringToday) {
      product.price = product.price / 2;
    }
  }
  console.log(arr);
}
saleProduct(productArr);
