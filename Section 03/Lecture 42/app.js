// Propogation
var child = document.querySelector(".child");
var parent = document.querySelector(".parent");

child.addEventListener("click", showChild);
parent.addEventListener("click", showParent);

function showChild() {
    event.stopPropagation();
    console.log("I am green");
}

function showParent() {
    console.log("I am red");
}