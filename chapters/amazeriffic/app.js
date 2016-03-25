var main = function (toDoObjects){
	"use strict";

	var $toDos = toDoObjects.map(function(toDo){
		return toDo.description;
	});
	

	$(".tabs span").toArray().forEach(function(element) {
		$(element).on("click", function(){
			var $element = $(element);
			var $content;
			
			$(".tabs span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();
			
			if ($element.parent().is(":nth-child(1)")) {
				$content = $("<ul>");
				var index;
				
				for (index = $toDos.length-1; index >= 0; index--){
					$content.append($("<li>").text($toDos[index]));
				}

				$("main .content").append($content);
			} else if ($element.parent().is(":nth-child(2)")) {
				$content = $("<ul>");
				$toDos.forEach(function(todo){
					$content.append($("<li>").text(todo));
				});
				
				$("main .content").append($content);
				
			} else if ($element.parent().is(":nth-child(3)")) {
				$content = ('<input type="text"><button>+</button>');
				$("main .content").append($content);
			}
			
			return false;
		});
	});
	$(".tabs a:first-child span").trigger("click");
};

$(document).ready(function(){
	$.getJSON("todos.json", function(toDoObjects) {
		main(toDoObjects);
	});
});