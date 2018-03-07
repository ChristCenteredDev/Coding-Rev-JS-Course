// Events
var button = document.querySelector(".myButton");

button.onclick = function () {
    console.log("Someone clicked me");
}

button.onmouseover = function () {
    console.log("Someone is over me");
}

button.ondblclick = function () {
    console.log("Someone double clicked me");
}

button.onmousedown = function () {
    console.log("Someone mouse downed me");
}