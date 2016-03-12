var main = function (){
	"use strict";
	
	$(".tabs span").toArray().forEach(function(element) {
		$(element).on("click", function(){
			var $element = $(element);
			
			$(".tabs span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();
			
			if ($element.parent().is(":nth-child(1)")) {
				console.log("first tab clicked");
			} else if ($element.parent().is(":nth-child(2)")) {
				console.log("second tab clicked");
			} else if ($element.parent().is(":nth-child(3)")) {
				console.log("third tab clicked");
			}
			
			return false;
		});
	});
	
}

$(document).ready(main);