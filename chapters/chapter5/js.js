var main = function(){
	"use strict";
	
	console.log("hola");
	
	$.getJSON("aceSpades.json", function (card) {
		console.log(card);
	
	var $cardParagraph = $("<p>");
	$cardParagraph.text(card.rank + " of " + card.suit);
	
	$("main").append($cardParagraph);
	});
	
	$.getJSON("hand.json", function (hand) {
		var $list = $("<ul>");
		
		hand.forEach(function(card){
		var $card = $("<li>");
		
		$card.text(card.rank + " of " + card.suit);
		$list.append($card);
		});
		$("main").append($list);
	});
};

$(document).ready(main);