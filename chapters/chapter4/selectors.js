var main = function () {
	"use strict";
	
	$("h1").css("color", "red");
	$(".important").css("background", "red");
	$("#relevant p:eq(0)").css("color", "orange");
	$("#relevant p:eq(2)").css("color", "yellow");
	$("p").css("background", "lightyellow");
	$("#relevant p").css("text-decoration", "underline");
	$("#relevant p:odd").css("border", "medium solid cyan");
	$("#relevant p:eq(6)").css("color", "purple");
	$("#relevant p:gt(3)").css("background", "lightgreen");
	$("#relevant p:not(.a)").css("text-decoration", "line-through");
	
}

$(document).ready(main);