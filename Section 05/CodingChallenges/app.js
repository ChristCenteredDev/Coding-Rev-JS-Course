// Coding Challenge 1
var divLogout = document.querySelector(".logout");

divLogout.addEventListener("click", alternate);

function alternate() {
    if (divLogout.textContent == "LOGOUT") {
        divLogout.textContent = "LOGGING OUT";

        setTimeout(function () {
            alert("You are logged out...");
            divLogout.textContent = "Log In";
        }, 5000);

    } else {
        divLogout.textContent = "LOGGING IN";

        setTimeout(function () {
            alert("You are logged in...");
            divLogout.textContent = "LOGOUT";
        }, 5000);

    }
}

// Coding Challenge 2

/*
We want to run a function whenever the page loads and the function will generate a random number between 1 and 100.

Then we need to create a loop that it's going to console log that random number until the number is greater that 90, if it's greater, we want to stop generating random numbers.
*/


// Generate the initial random number, setinterval to keep doing it, once random number is above 90 then stop

function numGen() {
    var number = Math.floor(Math.random() * 100) + 1;
    console.log(number);

    if (number >= 90) {
        clearInterval(randomNumGen);
    }
}

var randomNumGen = setInterval(function () {
    numGen(); 
}, 1000);

