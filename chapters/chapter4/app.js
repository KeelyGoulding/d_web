var main = function(){
	"use strict";
	
	$(".comment-input button").on("click", function (event){
		var $new_comment = $("<p>");
		var $comment_text = $(".comment-input input").val();
		
		$new_comment.text($comment_text);
		
		if ($(".comment-input input").val() !== "") {
		$(".comments").append($new_comment);
		}
	});
	
};

$(document).ready(main);