$(document).ready(function(){

var img1 = new image("bouquet", "images/bouquet.jpg", ["flower", "rose", "pink"], false);

var img2 = new image("tree", "images/tree.jpg", ["tree", "green", "oak"], false);

function image(title, url, tags, starred) {
	this.title = title;
	this.url = url;
	this.tags = tags;
	this.starred = starred;
	this.starToggle = function() {
		$("#" + this.title + " .star").toggleClass("starOn");
		this.starred = !this.starred;};
}

var images = [img1, img2];

function createImages() {

$("#gallery").empty();

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
	});

});
}

createImages();

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


	var name = $("input[name=title]");
	var tags = $("input[name=tags]");
	var file = $("input[name=photo]");

$("#submit").on("click", function(){
	var newImg = new image(name.val(), window.URL.createObjectURL(file.get(0).files[0]), tags.val().split(" "), false);
	images.push(newImg);

	createImages();

});

});