(function musicDB() {
    this.init = function () {
        this.search();
    }

    this.search = function () {
        var form = document.querySelector("#form");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var value = document.querySelector("#input_search").value;
            form.reset();

            getData(value.split(" ").join("+"));
        })

    }

    this.getData = function (artist) {
        var http = new XMLHttpRequest();
        var url = "https://itunes.apple.com/search?term=" + artist + "&entity=album";
        var method = "GET";

        var container = document.querySelector("#album_list_container");
        container.innerHTML = "";

        http.open(method, url);
        http.onreadystatechange = function () {
            if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
                showArtist(JSON.parse(http.response));

            } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {


            }
        }

        http.send();
    };

    this.showArtist = function (obj) {
        var container = document.querySelector("#album_list_container");
        var template = "";


    };


    this.init();

})();
