// Arrow Functions

// ES5
const value = function (name, age) {
    return `My name is ${name} my age is ${age}`
}

console.log(value("Francis", 35));

// ES6
const value2 = (name, age) => {
    return `My name is ${name} my age is ${age}`
}

console.log(value2("Francis", 35));

// ES5
const cars = {
    brands: ["Ford", "Audi", "BMW"],
    category: "Sport car",
    message: function () {
        const $this = this;
        return this.brands.map(function (brand) {
            console.log(`${brand} is a ${$this.category}`);
        });
    }
};

cars.message();

// ES6

const cars = {
    brands: ["Ford", "Audi", "BMW"],
    category: "Sport car",
    message: function () {
        return this.brands.map( brand => {
            console.log(`${brand} is a ${this.category}`);
        });
    }
};

cars.message();

// Object Literals

const request = (url, data) => {
    $.ajax({ method: "POST", url, data });
};

// Object literals Cont'd

const createCharacter = function (name, power, friend) {
    return {
        name: name,
        power: power,
        getFriends: function () {
            return friend;
        }
    }
};

const character = createCharacter("Superman", "Fly", "Louis Lane");

console.log(character);

// Default Arguments

function cars(brand) {
    if (!brand) {
        brand = "Ford";
    }
    console.log(`My car is a ${brand}`);
}

// ES6
function cars(brand = randomBrands()) {
    console.log(`My car is a ${brand}`);
}

function randomBrands() {
    const brands = ["Ford", "Audi", "BMW"];
    return brands[Math.floor(Math.random() * brands.length)];
}

// Rest Operator

// ES5
function args(arg1, arg2, arg3) {
    const arguments = [arg1, arg2, arg3];
    console.log(arguments);
}

args("Val1", "Val2", "Val3");

// ES6
function args(...args) {
    console.log(arguments);
}

args("Val1", "Val2", "Val3");

// Spread Operator

const brands = ["Ford", "Nissan"];
const otherBrands = ["Audi", "BMW"];

// const newArray = brands.concat(otherBrands);
// newArray.push("Other brand");

// ES6
const newArray = [...brands, ...otherBrand, "other brand"];

console.log(newArray);