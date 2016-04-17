$(document).ready(function(){

var img1 = {
	title:"Bouquet",
	url:"images/bouquet.jpg",
	tags:["flower", "rose", "pink"],
	starred: false,
	starToggle: function() { //create a custom method
		$("#" + this.title + " .star").toggleClass("starOn");
		this.starred = !this.starred;
	}
};

var img2 = {
	title:"Tree",
	url: "images/tree.jpg",
	tags:["tree", "green", "oak"],
	starred:false,
	starToggle: function() { //create a custom method
		$("#" + this.title + " .star").toggleClass("starOn"); //target .star inside img id
		this.starred = !this.starred;
	}
};

var images = [img1, img2];

images.forEach(function(img){ //use img instead of specific name to get array items

	var $fig = $("<figure>");
	$fig.attr("id", img.title);

	var $img = $("<img>");
		$img.attr("src", img.url);

	var $info = $("<figcaption>");
		$info.text("TAGS: " + img.tags[0] + ", " + img.tags[1] + ", " + img.tags[2]);

	var $star = $("<span>");
	$star.addClass("star");

	$info.append($star);

	$fig.append($img);
	$fig.append($info);
	$("#gallery").append($fig);

	if (img.starred == true) {
		img.starToggle();
	}

	$(".star").on("click", function(){
		var obj = $(this).parent().parent().get(0);
				if (obj.id == img.title){
					img.starToggle();
				}
	})

});

$("#filterFlower").on('click', function(){
	filter("flower");
		});

$("#filterTree").on('click', function(){
	filter("tree");
		});
$("#filterFave").on('click', function(){
	filter(true);
		});

	function filter (tag) {
		images.forEach(function(img){
		if($.inArray(tag, img.tags) >= 0){ //if tag is in array, fade in
			$("#" + img.title).fadeIn();
		} else if(img.starred == tag){
			$("#" + img.title).fadeIn();
		} else {
			$("#" + img.title).fadeOut();// if not, fade out
		}
	});
	}


// $("#filterFlower").on('click', function(){
// 	images.forEach(function(img){
// 		if($.inArray("flower", img.tags) < 0){ //if index value of the tag is < 0 (doesn't exist) then fadeout
// 			$("#" + img.title).fadeOut();
// 		}

// 	});
// });





});