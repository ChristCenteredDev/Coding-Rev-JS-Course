// Section 12 - ES6 Using Helpers

// forEach

var artists = ["Clapton", "U2", "Lamar"];

for (var i = 0; i < artists.length; i++) {
    console.log(artists[i]);
}

artists.forEach(function (artist) {
    console.log(artist);
});

artists.forEach((artist) => {
    console.log(artist);
});

// ForEach Example 1
const names = ["Francis", "Lisa", "Ron"];
let template = "";

names.forEach(function(name) {
    template += `<div>Hi my name is ${name} <strong> click me</strong></div>`;
});

document.body.insertAdjacentHTML("afterbegin", template);

// ForEach Example 2
var purchases = [
    { product: "Phones", number: 2, amount: 100 },
    { product: "TV", number: 5, amount: 100},
    { product: "Mac", number: 10, amount: 100 }];

var total = 0;

for (var i = 0; i < purchases.length; i++) {
    total += purchases[i].number * purchases[i].amount;
}

console.log(total);

purchases.forEach(function (purchase) {
    total += purchase.number * purchase.amount;
});

console.log(total); 