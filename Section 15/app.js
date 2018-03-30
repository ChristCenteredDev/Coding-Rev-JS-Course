// Destructuring Objects

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