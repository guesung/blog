function Product(name, price) {
  this.name = name;
  this.price = price;
  console.log(this.name, this.price);

  if (price < 0) {
    throw RangeError(
      'Cannot create product ' + this.name + ' with a negative price'
    );
  }
}

function Food(name, price) {
  // Product.call(this, name, price);
  Product(name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
// var fun = new Toy('robot', 40);
