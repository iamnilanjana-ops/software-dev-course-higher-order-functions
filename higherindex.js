//*/*
//🛒 Higher-Order Functions: Product Utilities
// //🎯 Objective:
//Students will create and work with higher-order functions to transform and manipulate data.

//They will:
// Write higher-order functions that accept callbacks to apply transformations dynamically
// Practice returning functions from higher-order functions for reusable, customizable utilities
// Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations


// ============================================
// 📦 Starting Dataset: Product List
// ============================================

const products = [
{ name: "Laptop", price: 1000, inStock: true },
{ name: "Phone", price: 500, inStock: false },
{ name: "Tablet", price: 800, inStock: true },
{ name: "Monitor", price: 300, inStock: true },
{ name: "Keyboard", price: 100, inStock: false },
];

//* ============================================
// 🔧 Tasks
// ============================================

//* Task 1: Filter Products by Availability

//*Create a function `filterProducts` that accepts:
//- an array of products
//- a callback function

//The callback should determine which products to include.
//Example: filter by availability or price threshold.

//Step-by-Step:
//1. Define the `filterProducts` function with appropriate parameters.
//2. Use the `filter()` method to apply the callback to the array.
//3. Return the filtered result.
//* Task 2: Transform Product Names

//Use `map()` to create a new array of product names in UPPERCASE.

//Step-by-Step:
//1. Use `map()` on the products array.
//2. Extract and transform the `name` property to uppercase.
//3. Store the result in a new variable.*//

function filterProducts(products, callback) {
  return products.filter(callback);
}

// Example usage
const inStockProducts = filterProducts(products, product => product.inStock);
console.log("Products in stock:", inStockProducts);


//* Task 3: Generate Discounted Prices

//Write a higher-order function `applyDiscount` that:
//- Accepts a discount percentage as a whole number
//- Returns a function that takes in a product object and returns a discounted price

//Step-by-Step:
//1. Define a function `applyDiscount` with a parameter `discountPercent`.
//2. Return a new function that takes a product object.
//3. Use this returned function inside a `forEach()` call to add a new property, `salePrice`, to each product object.
//4. Print the array of products to verify the new property and value have been added to each product object.*//

const productNamesUpper = products.map(product => product.name.toUpperCase());
console.log("Product names in uppercase:", productNamesUpper);
// Step 4: Generate discounted prices
function applyDiscount(discountPercentage) {
  return function(product) {
    return {
      product,
      price: product.price * (1 - discountPercentage / 100)
    };
  };
}

// Example: 10% discount
const discount10 = applyDiscount(10);
const discountedProducts = products.map(discount10);
console.log("Products with 10% discount:", discountedProducts);
// Task 4: Calculate Total Inventory Value

//Use `reduce()` to calculate the total value of products that are currently in stock.

//Step-by-Step:
//1. Use the `reduce()` method on the products array.
//2. Add only the prices of products where `inStock` is true.
//3. Store the total in a new variable. *//


// ============================================
// 🧪 Console Test Your Work
// ============================================

// console.log("Filtered products:", ...);
// console.log("Uppercased names:", ...);
// console.log("Discounted products:", ...);
// console.log("Total value in stock:", ...);

const totalValue = products
  .filter(product => product.inStock)
  .reduce((acc, product) => acc + product.price, 0);

console.log("Total inventory value:", totalValue);
