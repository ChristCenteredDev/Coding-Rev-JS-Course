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