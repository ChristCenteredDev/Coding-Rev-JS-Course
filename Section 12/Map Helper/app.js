// Map Helper

// ES5
var number = [1, 2, 3, 4, 5];
var otherArray = [];

for (var i = 0; i < number.length; i++) {
    otherArray.push(number[i] * 10);
}

console.log(otherArray); // [10, 20, 30, 40, 50]

// ES6
const numbers = [1, 2, 3, 4, 5];
const newArray = numbers.map(function (item) {
    return item * 10;
});

console.log(newArray); // [10, 20, 30, 40, 50]

// Map Helper Example
var users = [
    {user: "Martin Jones", age: 32, eyes: "brown"},
    {user: "Jane Doe", age: 20, eyes: "blue"},
    {user: "Brian Wrecker", age: 40, eyes: "brown"}
];

const listUsers = users.map(function (item) {
    return item.user;
});

listUsers.forEach(function (item) {
    let select = document.querySelector('select');

    select.insertAdjacentHTML("afterbegin", `
        <option>${item}</option>`)
});