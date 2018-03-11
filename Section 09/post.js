

var http = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/posts";
var method = "POST";

var db = JSON.stringify({ name: "Jules", message: "Say what again" });

http.open(method, url);
http.setRequestHeader("Content-Type", "application/json");

http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
        console.log(JSON.parse(http.response));
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
        console.log("bad something..")
    }


};

http.send(db);