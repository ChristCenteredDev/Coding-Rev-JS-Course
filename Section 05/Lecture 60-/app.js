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