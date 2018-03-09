var db = [
    {name: "James Butters", email: "James@gmail.com", age: 15},
    { name: "Mark Burton", email: "Mark@gmail.com", age: 23},
    { name: "Todd Jenning", email: "Todd@gmail.com", age: 18}
];

(function Avatars(db) {
    this.init = function () {
        this.generateList();
    }

    this.generateList = function () {

        var parent = document.querySelector("#parent_avatars");
        var template = "";

        for (var i = 0; i < db.length; i++) {

            template += '<div class="col- sm - 4">';
            template +=     '<div class="card">';
            template +=         '<div class="card- delete " data-card="">x</div>';
            template +=         '<div class="card- block">';
            template +=             '<h3 class="card-title">'+ db[i].name +'</h3>';
            template +=             '<p class="card-text"><strong>Email:</strong>' + db[i].email + '</p>';
            template +=             '<p class="card-text"><strong>Age:</strong>' + db[i].age + '</p>';
            template +=        '</div>';
            template +=    '</div>';
            template += '</div>';

        }

        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin', template);


    }


    this.init();
})(db);