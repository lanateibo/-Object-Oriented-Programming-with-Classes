
// part 1 setting up classes

class ProductProperties {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
      }
  
      toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
      }
  
}

console.log("Part 1: ProductProperties Base Class");

const apple = new ProductProperties("Apple", 2.5, 50);

console.log(apple.toString());

console.log("Total Value:", apple.getTotalValue());



// part 2 adding inheritance

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
      super(name, price, quantity);
      this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
      }
  
    }
  
  console.log("\nPart 2: PerishableProductProperties");

  const milk = new PerishableProductProperties("Milk", 1.5, 10, "2025-01-30");

  const yogurt = new PerishableProductProperties("Yogurt", 0.99, 20, "2025-01-15");

  console.log(milk.toString());

  console.log(yogurt.toString());

 
  // Part 3: Static Methods and Properties
  
  ProductProperties.applyDiscount = function (products, discount) {
    products.forEach(product => {
      product.price -= product.price * discount;
    });
  };

  console.log("\nPart 3: Applying 15% Discount");

  const testProducts = [apple, milk, yogurt];

  console.log("Before Discount:");

  testProducts.forEach(p => console.log(p.toString()));
  
  ProductProperties.applyDiscount(testProducts, 0.15);
  
  console.log("After 15% Discount:");

  testProducts.forEach(p => console.log(p.toString()));

    
    // Part 4: Store Management
 
  
  class Store {
    constructor() {
      this.inventory = [];
    }

    addProduct(product) {
        this.inventory.push(product);
      }
  
      getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
      }
  
      findProductByName(name) {
        return this.inventory.find(product => product.name === name) || null;
      }
  
  }

  // Add products to store

  const myStore = new Store();

  const banana = new ProductProperties("Banana", 1.2, 40);

  const bread = new ProductProperties("Bread", 2.0, 25);

  myStore.addProduct(apple);

  myStore.addProduct(banana);

  myStore.addProduct(bread);

  myStore.addProduct(milk);

  myStore.addProduct(yogurt);


  // Part 5: Testing the System
  
  
  console.log("\nPart 5: Testing the System");

  console.log("Inventory before discount:");

  myStore.inventory.forEach(p => console.log(p.toString()));
  
  console.log("Total Inventory Value (Before Discount): $" + myStore.getInventoryValue().toFixed(2));

  
  
  ProductProperties.applyDiscount(myStore.inventory, 0.15);
  
  console.log("\nInventory after 15% discount:");

  myStore.inventory.forEach(p => console.log(p.toString()));
  
  console.log("Total Inventory Value (After Discount): $" + myStore.getInventoryValue().toFixed(2));

  
  
  const productToFind = "Milk";

  const foundProduct = myStore.findProductByName(productToFind);
  
  console.log("\nSearching for product:", productToFind);
  if (foundProduct) {
    console.log("Found Product: " + foundProduct.toString());
  } else {
    console.log(`Product "${productToFind}" not found.`);
  }
