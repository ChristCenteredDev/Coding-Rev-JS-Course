// ES6 Classes

// ES5
function Car() { }
var car = new Car();

Car.prototype.status = "New";
Car.prototype.wheels = 4;
Car.prototype.avail = function () {
    console.log("available");
};

var ford = new Car();

console.log(ford.__proto__);

// ES6

class Car {
    constructor() {
        this.status = "New";
        this.wheels = 4;
        this.avail = () => {
            console.log("available");
        };
    }

};

const car = new Car();
const ford = new Car();

console.log(car);
console.log(ford);