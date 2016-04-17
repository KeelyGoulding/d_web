$(document).ready(function() {
	
	//Get stored data
	$.getJSON("data.json", function (dataObjects) {
        main(dataObjects);
    });
});


function main(dataObjects){

	function addAll() {

		$("#gallery").empty();

		dataObjects.forEach(function(data) {

			//create containing div element
			var $div = $("<div>");
			$div.addClass("node");

			//create new h1 element with class and contentscf
			var $title = $("<h1>");
			$title.addClass("title");
			$title.html(data.title);

			//create new p element with class and contents
			var $quote = $("<p>");
			$quote.addClass("userquote");
			$quote.html(data.quote);

			$div.append($title);
			$div.append($quote);

			$("#gallery").append($div);

		});

	}
	
	//run addAll function when page first loads (above)
	addAll();

	$("#submit").on("click", function(e) {
		e.preventDefault();

		//grab values from form
		var nodeTitle = $("input[name=title]").val();
		var nodeQuote = $("input[name=quote]").val();

		console.log(nodeTitle);
		console.log(nodeQuote);

		function node(title, quote) {
			this.title = title,
			this.quote = quote
		}

		var newNode = new node(nodeTitle, nodeQuote);

		$.post("addData", newNode, function (result) {
            
            console.log(result);

            //Add new image to client-side array of objects
            dataObjects.push(newNode);

            //update the DOM
            addAll();
			
			//fade out dialogue
			$("#overlay").click();
        });

	}); // end of submit

	//submit form if user hits enter
	$("input[name=quote]").on("keydown", function(event) {
		// check for keycode 13 (the enter key)
		if (event.which == 13){
			$("#submit").click();
		}
	});
	
}

$("#add").on("click", function(e) {
	e.preventDefault();
	$("#modal").fadeIn();
	$("#overlay").fadeIn();
});

$("#overlay").on("click", function() {
	$("#modal").fadeOut();
	$(this).fadeOut();
	
	$("#download").on("click", function (e){
		e.preventDefault();
		var dataDownload = "text/json;charset=utf-8," + encodeURIComponent (JSON.stringify(dataObjects));
		$("#download").attr("href", "data:" + dataDownload);
		window.location = document.getElementById('download').href;
	});
	
});