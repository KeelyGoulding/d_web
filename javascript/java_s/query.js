$(document).ready(function() {

$("div").text("howdy");
$("div").html("<h1>Bye</h1>");

var text = "here is some text";

$("div").before(text);

$("button").on("click", function {
	$("div").toggleClass("blue");	
});














});