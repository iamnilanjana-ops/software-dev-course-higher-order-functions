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
function filterProducts(productsArray, callback) {
  return productsArray.filter(callback);
}
//*Create a function `filterProducts` that accepts:
//- an array of products
//- a callback function

//The callback should determine which products to include.
//Example: filter by availability or price threshold.

//Step-by-Step:
//1. Define the `filterProducts` function with appropriate parameters.
//2. Use the `filter()` method to apply the callback to the array.
//3. Return the filtered result.

// Example usage: filter by availability
const inStockProducts = filterProducts(products, product => product.inStock);
console.log("Products in stock:", inStockProducts);

// Example usage: filter by price threshold
const expensiveProducts = filterProducts(products, product => product.price >= 800);
console.log("Products priced >= 800:", expensiveProducts);

//* Task 2: Transform Product Names

//Use `map()` to create a new array of product names in UPPERCASE.

//Step-by-Step:
//1. Use `map()` on the products array.
//2. Extract and transform the `name` property to uppercase.
//3. Store the result in a new variable.*//

const productNamesUpper = products.map(p => p.name.toUpperCase());
console.log("Uppercase names:", productNamesUpper);


//* Task 3: Generate Discounted Prices

//Write a higher-order function `applyDiscount` that:
//- Accepts a discount percentage as a whole number
//- Returns a function that takes in a product object and returns a discounted price

//Step-by-Step:
//1. Define a function `applyDiscount` with a parameter `discountPercent`.
//2. Return a new function that takes a product object.
//3. Use this returned function inside a `forEach()` call to add a new property, `salePrice`, to each product object.
//4. Print the array of products to verify the new property and value have been added to each product object.*//

function applyDiscount(discountPercent) {
  return function(product) {
    // Mutate the product by adding salePrice
    product.salePrice = +(product.price * (1 - discountPercent / 100)).toFixed(2);
    return product;
  };
}

// Use returned function inside forEach to add salePrice to original objects
const apply10Percent = applyDiscount(10);
products.forEach(apply10Percent);

console.log("Products after adding salePrice (10%):", products);
// Immutable version (returns new objects; original array unchanged)
// If you prefer not to mutate the original objects:
function applyDiscountImmutable(discountPercent) {
  return function(product) {
    return {
      ...product,
      salePrice: +(product.price * (1 - discountPercent / 100)).toFixed(2)
    };
  };
}

const discountedProductsImmutable = products.map(applyDiscountImmutable(15));
console.log("Immutable discounted products (15%):", discountedProductsImmutable);
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

console.log("Total inventory value (in stock):", totalValue);


// Console tests summary
// ---------------------------
console.log("Filtered products (in stock):", inStockProducts);
console.log("Uppercased names:", productNamesUpper);
console.log("Discounted products (mutable, 10% added to original):", products);
console.log("Discounted products (immutable, 15%):", discountedProductsImmutable);
console.log("Total value in stock:", totalValue);