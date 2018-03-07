// Create an Element 1
var div = document.createElement("div");
div.textContent = "Challenge 1";
div.style.fontSize = "20px";
div.style.background = "green";
div.style.color = "red";
div.style.width = "200px";
div.style.height = "200px";
div.style.border = "2px solid blue";

// Insert an Element 1
var parent = document.querySelector(".parent");

parent.appendChild(div);

// Create an Element 2
var div2 = document.createElement("div");
div2.textContent = "Challenge 2";
div2.style.background = "red";
div2.style.width = "200px";
div2.style.height = "200px";
var span2 = document.createElement("span");
span2.textContent = "DONT TOUCH THE RED BUTTON!!!";

// Insert an Element 2
var parent2 = document.querySelector(".parent2");

parent2.appendChild(div2);
div2.appendChild(span2);

// On Click - Challenge 2
div2.addEventListener("click", hacked);

function hacked() {
    alert("Your computer has been HACKED!");
}

// Challenge 3
// Create an Element 3
var div3 = document.createElement("div");
div3.textContent = "Challenge 3";
div3.style.background = "red";
div3.style.width = "200px";
div3.style.height = "200px";
div3.style.border = "5px solid yellow";

// Insert an Element 3
var parent3 = document.querySelector(".parent3");

parent3.appendChild(div3);

// On Click - Challenge 3
div3.addEventListener("click", alternate);

function alternate() {
    if (div3.style.width == "200px") {
        div3.style.width = "100px";
        div3.style.height = "100px";
    } else if(div3.style.width != "200px") {
        div3.style.width = "200px";
        div3.style.height = "200px";
    }
}