// ES6 Classes

function Car() { }
var car = new Car();

Car.prototype.status = "New";
Car.prototype.wheels = 4;
Car.prototype.avail = function () {
    console.log("available");
};

var ford = new Car();

console.log(ford.__proto__);