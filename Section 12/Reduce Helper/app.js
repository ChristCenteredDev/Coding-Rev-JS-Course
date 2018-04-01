// ES6 - Reduce Helper

const previous = 200;
const current = [
    {expense: "Guitar", amount: 200},
    {expense: "Mic", amount: 100},
    {expense: "strap", amount: 100},
];

const results = current.reduce(function (sum, expense) {
    return sum + expense.amount;
}, previous);

// Reduce Helper Example 2 with Strings
const users = [
    {name: "Francis", lastname: "Norton", age: 25},
    {name: "Martha", lastname: "Suchard", age: 19},
    {name: "Rob", lastname: "Maker", age: 21},
];

const names = users.reduce(function () {
    start.push(user.name);
    return start;
}, []);

console.log(names);  // ["Francis", "Martha", "Rob"];