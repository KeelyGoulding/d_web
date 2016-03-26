var toDoObjects = [
{"description":"get groceries",
	"tags": ["shopping", "chores"]},
{"description":"make new ToDos",
	"tags": ["writing", "work"]},
{"description":"prep for class",
	"tags": ["work", "teaching"]},
{"description":"answer emails",
	"tags": ["work"]},
{"description":"take Gracie to the park",
	"tags": ["pets", "chores"]},
{"description":"finish writing this book",
	"tags": ["work", "writing"]}
]

var organizeByTags = function(toDoObjects) {
	console.log("organizeByTags called");	
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
};

var main = function(){
	"use strict";
	organizeByTags(toDoObjects);
};

$(document).ready(main);