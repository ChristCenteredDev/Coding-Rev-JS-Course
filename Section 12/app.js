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


const names = ["Francis", "Lisa", "Ron"];
let template = "";

names.forEach(function(name) {
    template += `<div>Hi my name is ${name} <strong> click me</strong></div>`;
});

document.body.insertAdjacentHTML("afterbegin", template);