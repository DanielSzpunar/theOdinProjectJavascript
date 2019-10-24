//Exercise 1 Book constructor:
function book(title, author, pages, wasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.wasRead = false
    this.info = function() {
        return (`${this.title}, by ${this.author}, ${this.pages} pages, read: ${this.wasRead}`);
    }
}

function Plant() {
    this.country = "Mexico"
    this.isOrganic = true;
}

Plant.prototype.showNameAndColor = function() {
    console.log("I am a " + this.name + " and my color is " + this.color)
}
Plant.prototype.AmIOrganic = function() {
    if (this.isOrganic) {
        console.log("I am organic baby!");
    }
}
function Fruit(fruitName, fruitColor) {
    this.name = fruitName
    this.color = fruitColor;
}
Fruit.prototype = new Plant();


// Creates a new object, aBanana, with the Fruit constructor
var aBanana = new Fruit ("Banana", "Yellow");
// Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
console.log(aBanana.name); // Banana

// Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.

function Vegetable() {
    this.origin = "Mexico"
    this.isOrganic = true;
}
Vegetable.prototype.showOriginAndOrganic = function() {
    return `this plant originates from ${this.origin}. Organic: ${this.isOrganic}`
}
function sweetVegetable(name, color) {
    this.name = name;
    this.color = color;
}
sweetVegetable.prototype = new Vegetable();
