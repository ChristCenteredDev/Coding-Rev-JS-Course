// ES6 Classes I

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

// ES6 Classes II

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

// ES6 Classes III

class Car {
    constructor({status, wheels, avail}) {
        this.status = status;
        this.wheels = wheels;
        this.avail = avail;
    }

};

const car = new Car({
    status: "New",
    wheels: 4,
    avail: () => {
    console.log("available");
},
});

console.log(car);

// ES6 Classes IV - Watched Video







