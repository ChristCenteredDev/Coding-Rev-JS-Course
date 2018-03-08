// Immediately Invoked Functions - IIFE
function showName() {
    console.log("Francis");
}

showName();

(function showName2() {
    console.log("Francis2");
})();

var number = 5;

(function addNum(value) {
    number = value + 5;
    console.log(number);
})(number);

console.log(number);

// Closures
function multiply(value) {
    return value * 2;
}

console.log(multiply(20));

function multiply2(value) {
    var total = value;
    return function () {
        return total * 2;
    }
}

var getResult = multiply2(20);
var getResult2 = multiply2(60);

console.log(getResult());
console.log(getResult2());

// Built-in Methods
var name = "Luke Skywalker";

// Convert to uppercase
console.log(name.toUpperCase());
// Convert to lowercase
console.log(name.toLowerCase());
// Trim white spaces
console.log(name.trim());
// Get the amount of characters
console.log(name.length);
// Get a specific character
console.log(name[1]);
console.log(name.charAt(0));
// Merge it with a different string
console.log(name.concat(" , that's my name."));
// Split every word of it
console.log(name.split(" "));

// Set Interval, Clear Interval, Set Timeout
setTimeout(function () {
    alert("Welcome to the page...")
}, 2000);

var hello = setInterval(function () {
    console.log("Hello");
}, 2000);

setTimeout(function () {
    clearInterval(hello);
}, 5000);

// Manipulate Strings & Numbers
var number = "20";
console.log(typeof parseInt(number));  // .toString() - converts a number to String

// Math Helpers

// Math.round
console.log(Math.round(2.46)); // 2
// Math.ceil
console.log(Math.ceil(2.46)); // 3
// Math.floor
console.log(Math.floor(2.46)); // 2
// Math.min
var arr = [2.43, 7, 1.01, 11.23, 1.00];
console.log(Math.min(2.43, 7, 1.01, 11.23, 1.00)); // 1
// Math.max
console.log(Math.max(2.43, 7, 1.01, 11.23, 1.00)); // 11.23
// Math.random
console.log(Math.floor(Math.random() * 6) + 1); // 1-6