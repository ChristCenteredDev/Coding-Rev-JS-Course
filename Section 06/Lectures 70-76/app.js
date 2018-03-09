// Objects

var user = {
    name: "Francis",
    lastName: "Jones",
    age: 16,
    cars: ["Car", "Truck", "Motorcycle", "Moped"],
    misc: {
        hobbies: ["Driving", "Games", "Church"],
        lang: ["English", "Filipino"]
    },
    salute: function () {
        console.log("Hi there, I am " + this.name + ".  I am " + this.age);  // This Keyword - is working
    }
};

console.log(user);
console.log(user.misc.lang);
user.salute();

// This Keyword

// Using Prototype

function User() {

}

var user = new User();
user.name = "Max";

Object.prototype.scream = function() {
    console.log("A scream");
}

user.scream();

console.log(user);
console.log(user.__proto__);

// Prototypes in real life
function FastCar() {
    this.seats = 2;
    this.available = function () {
        console.log(this.model + " - not available.");
    }

}

var ford = new FastCar();
var chevy = new FastCar();

ford.color = "red";
chevy.color = "blue";

ford.model = "mustang";
chevy.model = "nova";

console.log(ford);
console.log(chevy);
ford.available();

function FastCar2(brand, color) {
    this.brand = brand;
    this.color = color;
    this.seats = 2;
    this.available = function () {
        console.log(this.model + " - not available.");
    }
}

var ford2 = new FastCar2("Ford", "Black");

if ("color" in ford2) {
    console.log("It is");
}

for (var field in ford2) {
    console.log(field);
}

