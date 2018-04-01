// Starting with jQuery - Watched the video's

$(document).ready(function () {  // Only runs the JS code once the webpage fully loaded
    /*  <<< Insert all JS here >>>  */

    // console.log( document.querySelectorAll("p") ); - Vanilla JS gets All paragraph tags
    // console.log( $("p") ); - jQuery gets all paragraph tags

    // Selecting Classes & ID's
    // $(".text"); - Classe "text"
    // $("#list"); - ID "list"

    // Selecting other elements
    // $("input[type="text"]") - selects the tag input with type of text
    // $("input:text") - also selects the tag input with type of text
    // $("li:first") - selects the first li 
    // $("li:odd") - selects the odd li's 

    // Selecting Children
    // $(".parent p") - selects all the paragraphs under "parent" class
    // $(".parent p:first-child") - selects the first-child paragraph under "parent" class

    // Finding Elements
    // $(".parent").find("p"); - finds all paragraph tags under "parent" class
    // # for ID's, . for classes...etc

    // Getting the parents
    // $(.className).parent(); - gets the parent element of the class
    // $(.className).parents(); - Get's the main parent

    // Previous & Next
    // $(.className).prev(); - get's the previous element of the class specified
    // $(.className).next(); - get's the next element of the class specified

    // Using EQ
    // $(".list li:eq(0)"); - Selects from the list class the li at the 0 index using eq(0)
    // $(".list").parents().eq(0); Selects the parent at the 0 index above list class... eq(1) would select the 2nd index parent of list..etc..etc

    // First, Last, Filter & Not
    // $("div").first(); grabs the first div
    // $("div").last(); grabs the last div
    // $("div").filter(".different"); searchs and finds only the different class
    // $("div").not(".different"); gets all the divs except the different class

});