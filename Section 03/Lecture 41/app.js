// Events
var button = document.querySelector(".myButton");

/* 
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
*/

// Event Listeners
function click1() {
    console.log("Someone clicked me");
}

function click2() {
    console.log("Something else");
    button.removeEventListener("click", click1);
}

button.addEventListener("click", click1);
button.addEventListener("click", click2);


