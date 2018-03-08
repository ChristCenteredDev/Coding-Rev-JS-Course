// Coding Challenge 1

var names = ["Francis", "John", "Steve"];

names.splice(2, 1, "Lisa");

console.log(names);
var newnames = names.join(" / ");
console.log(newnames);

// Coding Challenge 2
var names2 = ["Tedd", "Tom"];
var newArray = names.concat(names2);
console.log(newArray);

var filtered = newArray.map(function (name) {
    return `My name is ${name}`;
})

console.log(filtered);