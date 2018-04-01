// ES6 - Destructuring Objects

var user = {
    name: "Francis",
    lastname: "Jones",
    age: 25,
};

var name = user.name;
var lastname = user.lastname;
var age = user.age;

console.log(name);
console.log(lastname);
console.log(age);

const { name, lastname, age } = user;

// Destructuring Arrays

const cars = ["Camero", "Nova", "Audi"];

const camero = cars[0];

const [Camero, ...rest] = cars;

// More on Destructuring

const users = [
    {name: "Francis", lastname: "Jones", age: 25},
    {name: "Martha", lastname: "Smith", age: 20},
    {name: "Helen", lastname: "Neron", age: 16},
];

const [{ lastname }] = users;

// Destructuring Function Arguments

function createCar({ brand, model, color, type, year }) {

}

const car = {
    brand: "Ford",
    model: "Focus",
    color: "red",
    year: "2015",
    type: "fast"
}

createCar(car);