// Section 18 - jQuery: using the Dom

$(document).ready(function () {  // Only runs the JS code once the webpage fully loaded
    /*  <<< Before & After >>>  */

    // Before
    $(".element").before("<div>Before</div>");

    // After
    $(".element").after("<div>After</div>");

    // Error Message Example
    $("input").after("<div class='error'>Missing message</div>");


});
