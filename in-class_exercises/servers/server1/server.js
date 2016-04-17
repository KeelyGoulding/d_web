
var express = require("express");
var http = require("http");
var app = express();

http.createServer(app).listen(3000);
console.log("server is listening at port 3000");

app.get("/", function(req, res) {
	res.send("hello again");
});

app.get("/testing", function(req, res) {
	res.send("testing 1, 2, 3");
});