$(document).ready(function(){

var xhr = new XMLHttpRequest();

xhr.onload = function(){
	var jsonResponse = JSON.parse(xhr.responseText);
	console.log(jsonResponse);

	for (var i=0; i< jsonResponse.events.length; i++){
		console.log(jsonResponse.events[i].location);

		var location = "<h2>" + jsonResponse.events[i].location + "</h2>";
		var map = "<img src='" + jsonResponse.events[i].map + "'>";
		var date = "<h3>" + jsonResponse.events[i].date + "</h3>";
		var $div = ''

		$div += "<div class='place'>";
		$div += location;
		$div += map;
		$div += date;
		$div += "</div>"


		$("#list").append($div);

	}
}

xhr.open("GET", "data/data.json", true);
xhr.send(null);




});