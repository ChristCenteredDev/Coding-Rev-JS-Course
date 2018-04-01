// ES6 - Let and Const
const type = "Cupcake";
let flavor = "Apple";
let price = 5;

type = "Cake" // Error due to Const not allowing change
flavor = "Butter Pecan"; // Works fine with let

// ES6 Scope w/ Let & Const
var winner = true; // Global

function user() {
    var winner = false; // Local - This needs to be console.log in the function
} // Note: With Let even in a if it has local scope

user();

console.log(winner); // true - Global variable shows

// Template Literals

function employee() {
    var name = "Francis";
    var age = 25;
    var position = "Manager";

    // ES5 Format with Concatination
    console.log("His name is " + name + ", and he is" + age + "years old, he works as " + position);
}

function employee2() {
    const name = "Francis";
    let age = 25;
    let position = "Manager";

    // Template Literal format
    console.log(`His name is ${name}, and he is ${age} years old, he works as ${position}`);
}