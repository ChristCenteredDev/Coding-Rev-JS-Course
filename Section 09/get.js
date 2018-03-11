

var http = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/posts";
var method = "GET";

http.open(method, url);
http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        console.log(JSON.parse(http.response));
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
        console.log("bad something..")
    }
};

http.send();