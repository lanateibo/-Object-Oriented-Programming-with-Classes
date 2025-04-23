
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
  
  
    
  
