// Section 18 - jQuery: using the Dom

$(document).ready(function () {  // Only runs the JS code once the webpage fully loaded
    /*  <<< Append / Prepend >>>  */

    /* Vanilla JavaScript */
    //var parent = document.querySelector(".parent");
    //var newElement = document.createElement("div");
    //newElement.className = "newDiv";
    //newElement.innerText = "Hello Me!";
    //parent.appendChild(newElement);

    /* Append jQuery - put to the rear of the element */
    // $(".parent").append("<div class='newDiv'>Hello Me!</div>");

    /* AppendTo jQuery - put to the rear of the element */
    // $("<div class='newDiv'>Hello Me!</div>").appendTo(".parent");

    /* Prepend jQuery - put to the front of the element */
    // $(".parent").prepend("<div class='newDiv'>Hello Me!</div>");

    /* PrependTo jQuery - put to the front of the element */
    $("<div class='newDiv'>Hello Me!</div>").prependTo(".parent");


});
