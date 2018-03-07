// Create an Element
// var div = document.createElement("div");
// div.textContent = "My new content";
// div.style.fontSize = "20px";

// console.log(div);

// Insert an Element
// var parent = document.querySelector(".parent");

// var div = document.createElement("div");
// div.textContent = "My new content";
// div.style.fontSize = "20px";

// parent.appendChild(div);

// Delete an Element
var parent = document.querySelector(".parent");
var ul = parent.querySelector("ul");

parent.removeChild(ul);  // ul.remove() - works but only on modern browsers