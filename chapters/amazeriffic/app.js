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
				var organizedByTag = [
					{"name":"shopping", "toDos":["get groceries"]},
					{"name":"chores", "toDos":["get groceries", "take Gracie to the park"]},
					{"name":"writing", "todos":["make new toDos", "finish writing this book"]},
					{"name":"work", "toDos":["make new toDos", "prep for class", "answer emails", "finish writing this book"]},
					{"name":"teaching", "toDos":["prep for class"]},
					{"name":"pets", "toDos":["take Gracie to the park"]}
					];
					
					organizedByTag.forEach(function(tag){
						var $tagName = $("<h3>").text(tag.name);
						$content = $("<ul>");
						
						tag.toDos.forEach(function(description){
							var $li = $("<li>").text(description);
							$content.append($li);
						});
						$("main .content").append($tagName);
						$("main .content").append($content);
					});
				
			} else if ($element.parent().is(":nth-child(4)")) {
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