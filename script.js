
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
