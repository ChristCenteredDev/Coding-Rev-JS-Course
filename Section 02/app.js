// External JS Script that get's linked to HTML Document

//Numbers and Bools
var num = 23; // Number
var bool = true; // Boolean

if (bool != false) {
    console.log(num);
}

// Arrays
var arr = ["Ted", "Frank", "Chris", "Chad"];

console.log(arr[1]);

// Null, Undefined, NAN
var arrr = [0, 10, 11, null];
var num = "Todd";

console.log(num * 5); // NaN Error - Not a number
console.log(arrr[4]); // Undefined error
console.log(arrr[3]); // Null

// Objects
var obj = {
    name: "Todd",
    age: 33,
    state: "Michigan",
    country: "USA"
}

console.log(obj.name);

// Control Structure
var bool = true;

if (bool == true) {
    console.log("bool equals " + bool);
}

// IF Statements
var name = "Todd";

if (name == "Ron") {
    console.log("It's Ron");
} else {
    console.log("It's someone else.");
}

// Switch Statement
var slot = 3;

switch (slot) {
    case 1:
        console.log("Won a TV");
        break;
    case 2:
        console.log("Won a Playstation");
        break;
    case 3:
        console.log("Won a Home Theatre System");
        break;
    default:
        console.log("Spin again");
}

// For Loop
var x = 1;

for (var i = 10; i > x; i--) {
    console.log(`Countdown: ${i}`);
}

// Break & Continue
for (var i = 1; i <= 5; i++) {
    if (i == 2) {
        continue;
        // continue - 1, 3, 4, 5
        // break - 1
    }

    console.log(i);
}

// For Loops: Arrays
var arr = ["Todd", "Chett", "Chad", "Matt", "Henry"];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// While Loop
var logged = true;
var i = 0;

while (logged) {
    if (i === 3) {
        logged = false;
    }

    console.log(i);
    i++;
}

// Addition & Concatenation
var previous = 200;
var current = 100;

current += previous; // 300

var firstName = "Todd";
var lastName = "Carter";

var fullName = firstName + " " + lastName;  // Concatenation

// Subtraction
var total = previous - current;

console.log(total); // 100

// Multiply
total = previous * current; // 20000

// Divide
total = previous / current; // 2

// Compare Operator
var test = "2";

if (test == 2) {
    console.log("They are the same");  // True
} else {
    console.log("They are not same");
}

if (test === 2) {  // Strict Equality
    console.log("They are the same");
} else {
    console.log("They are not same"); // False
}

// Greater Than & Less Than

if (test > 2) {  
    console.log("Test is greater");
} else {
    console.log("Test is not greater");
}

// Boolean
if (1 > 0) {
    console.log(true);
} else {
    console.log(false);
}

// Ternary 
var x = 10;
var y = 10;

(x == y ? console.log(true) : console.log(false));

// Function
function isTrue(x) {
    var result = (x == true ? true : false);
    return result;
}

// Arguments
function isTrue(x) {  // x is the argument
    var result = (x == true ? true : false);
    return result;
}

// Global & Local Scope
var global = "global scope";

function scope() {
    var local = "local scope";
}

// Function Returns
function isHot(x) {
    var result = (x == true ? true : false);
    return result;
}

// Coding Challenge