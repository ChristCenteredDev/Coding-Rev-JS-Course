// Window & DOM
console.log(window);
console.log(window.innerWidth);
console.log(window.outerHeight);
console.log(window.open("http://www.google.com"));

// Document Object
console.log(document.title);
console.log(document.body.children[0]);

// Selecting DOM Elements
console.log(document.getElementById("different")); // Older DOM Method
console.log(document.getElementsByClassName("differ")); // Older DOM Method
console.log(document.querySelector("#different")); // Mordern DOM Method
console.log(document.querySelectorAll("div")); // Mordern DOM Method

// Create an Element
var div = document.createElement("div");
div.textContent = "My new content";
div.style.fontSize = "20px";

console.log(div);

// Insert an Element
var parent = document.querySelector(".parent");

var div = document.createElement("div");
div.textContent = "My new content";
div.style.fontSize = "20px";

parent.appendChild(div);

