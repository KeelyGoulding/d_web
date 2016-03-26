var main = function (toDoObjects){
	"use strict";

	var $toDos = toDoObjects.map(function(toDo){
		return toDo.description;
	});

//tag-organized list
	var organizeByTags = function(toDoObjects) {	
	var tags = [];
	
	toDoObjects.forEach(function(toDo) {
		toDo.tags.forEach(function(tag) {
			if (tags.indexOf(tag) === -1) {
				tags.push(tag);
			}
		});
	});
	var tagObjects = tags.map(function(tag){
		var toDosWithTag = [];
		toDoObjects.forEach(function(toDo) {
			if (toDo.tags.indexOf(tag) !== -1){
			toDosWithTag.push(toDo.description);
			}
		});
		return{"name": tag, "toDos": toDosWithTag};
	});
	//console.log(tagObjects);
};
	
//tabs
	$(".tabs span").toArray().forEach(function(element) {
		$(element).on("click", function(){
			var $element = $(element);
			var $content;
			
			$(".tabs span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();
			
			if ($element.parent().is(":nth-child(1)")) { //tab 1
				$content = $("<ul>");
				var index;
				
				for (index = $toDos.length-1; index >= 0; index--){
					$content.append($("<li>").text($toDos[index]));
				}

				$("main .content").append($content);
			} else if ($element.parent().is(":nth-child(2)")) { //tab 2
				$content = $("<ul>");
				$toDos.forEach(function(todo){
					$content.append($("<li>").text(todo));
				});
				
				$("main .content").append($content);
				
			} else if ($element.parent().is(":nth-child(3)")) { //tab 3
				//tag-organized list
				var organizeByTags = function(toDoObjects) {	
				var tags = [];
				
					toDoObjects.forEach(function(toDo) {
							toDo.tags.forEach(function(tag) {
								if (tags.indexOf(tag) === -1) {
									tags.push(tag);
								}
							});
					});
					var tagObjects = tags.map(function(tag){
						var toDosWithTag = [];
						toDoObjects.forEach(function(toDo) {
							if (toDo.tags.indexOf(tag) !== -1){
							toDosWithTag.push(toDo.description);
							}
						});
						return{"name": tag, "toDos": toDosWithTag};
							
						});
						console.log(tagObjects);
						
						/*var $tagName = $("<h3>").text(toDo.name);
						$content = $("<ul>");
							
								toDo.forEach(function(tags){
								var $li = $("<li>").text(tags);
								$content.append($li);
							});
						organizeByTags(toDoObjects);
						$("main .content").append($tagName);
						$("main .content").append($content);*/
					
			};
			
				
				
			} else if ($element.parent().is(":nth-child(4)")) { //tab 4
				var $input = $("<input>").addClass("description"),
					$inputLabel = $("<p>").text("Description: "),
					$tagInput = $("<input>").addClass("tags"),
					$tagLabel = $("<p>").text("Tags: "),
					$button = $("<button>").text("+");
					
					$button.on("click", function(){
						var description = $input.val(),
							tags = $tagInput.val().split(",");
					
					toDoObjects.push({"description":description, "tags":tags});
					
					toDos = toDoObjects.map(function(toDo){
					return toDo.description;
					});
					
					$input.val("");
					$tagInput.val("");
					});
					
				$content = $("<div>").append($inputLabel).append($input).append($tagLabel).append($tagInput).append($button);
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