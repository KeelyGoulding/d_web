$(document).ready(function(){
	
//FONT-SIZING	
	$(".bubble:nth-of-type(1)").fitText(0.65);
	$(".bubble:nth-of-type(2)").fitText(0.45);
	$(".bubble:nth-of-type(3)").fitText(0.1);
	$("header").fitText(3);
	$("#return").fitText(0.5);

	
//RETURN	
	$("#return").on("mouseover", function(){
		$("#return").css("opacity", "1");
	});
	
	$("#return").on("mouseout", function(){
	$("#return").css("opacity", "0.7");
	});
	
	$("#return").click(function () {
		$('body').animate({ scrollLeft: $("#anchor").offset().left}, 1500);
		});
	
//POPUP	
	$("#plus").on("click", function(){
		$("#container").foggy({opacity:1});
		$("#train").foggy({opacity:1});
		$("#background").foggy();
		$("#filter").fadeIn();
		$("#add").fadeIn();
		$("body").css("overflow-x", "hidden");
	});
	
	$("#x").on("click", function(){
		$("#background").foggy(false);
		$("#container").foggy(false);
		$("#train").foggy(false);
		$("#filter").fadeOut();
		$("#add").fadeOut();
		$("body").css("overflow-x", "auto");
	});
	
	$("#filter").on("click", function() {
		$("#x").click();
	});

//HORIZONTAL SCROLL	
 $('body').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta * 30);
    e.preventDefault();
});

///JSON
	$.getJSON("data.json", function (dataObjects) {
        main(dataObjects);
    });
	
	//DOWNLOAD DATA
	$("#download").on("click", function(e) {
		e.preventDefault();
		var dataDownload = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataObjects));
		$("#download").attr("href", "data:" + dataDownload);
		window.location = document.getElementById('download').href
	});
});

function main(dataObjects){
	
	function addCar() {
		
	$("#cars").empty();
	
	dataObjects.forEach(function(data){
	
		var $div = $("<div>");
		$div.addClass("car");
		
		var $frame = $("<img>");
		$frame.attr("src", "images/train_car.svg");
		
		var $content = $("<div>");
		$content.addClass("content");
	
		var $cars = $("#cars");
		
		$div.append($frame);
		$div.append($content);
		$cars.prepend($div);
			
		$content.css("background-image", "url(" + data.image + ")"); 
		console.log(data.image);
		
		$content.css("background-color", data.bgColor); 
		$content.text(data.text);
		$content.css("color", data.color); 
		$content.fitText(data.size); 
		
		if (data.u == "underline"){
		$content.css("text-decoration", "underline"); 
		} 
		if (data.i== "italic"){
		$content.css("font-style", "italic"); 
		}
		if (data.b== "bold"){
		$content.css("font-weight", "bold");
		}
		

	});
			//lengthen train
	var $width = (40 * dataObjects.length);
	$("#train").css("width", $width + "vw");
	$("#background").css("width", $width+40 + "vw");
}
	
	addCar();

/////PREVIEW	
	function prevWindow(){
		var preview = $("#preview");
		
		var text = $("input[name=text]").val();
		var color = $("input[name=color]").val();
		var size = $("input[name=size]").val();
		var b = $("input[name=bold]:checked").val();
		var i = $("input[name=italic]:checked").val();
		var u = $("input[name=underline]:checked").val();
		//var image = $("input[name=image]").val();
		var bgColor = $("input[name=bgColor]").val();
	
		//preview.css("background-image", "url(" + image + ")"); 
		preview.css("background-color", bgColor); 
		preview.text(text);
		preview.css("color", color);
		preview.fitText(size);
		
		if (u == "underline"){
			preview.css("text-decoration", "underline"); 
		} else {
			preview.css("text-decoration", "none");}
		if (i== "italic"){
		preview.css("font-style", "italic"); 
		} else {
			preview.css("font-style", "normal");}
		if (b== "bold"){
			preview.css("font-weight", "bold");
		} else {
			preview.css("font-weight", "normal");}
			
	/*		$("prev_button").on("click", function(){
				preview.css("background-image", "url(" + image + ")");
			});*/
	}
	
	$("input").on("focus keyup blur click change", function(){
		return prevWindow();
	}); 
	
	$("input[name=text]").on("keydown", function(event) {
		if (event.which == 13){
			$("#submit").click();
		}
	});
		
	//AJAX SUBMIT
	$("#form").submit(function(e) {
	e.preventDefault();
	
	var formObj = $(this);
	var formURL = formObj.attr("action");
	var formData = new FormData(this);

  
		$.ajax({
			url: formURL,
			type: 'POST',
			data:  formData,
			mimeType:"multipart/form-data",
			contentType: false,
			dataType: "json",
			cache: false,
			processData:false,
			success: function(result){
			
				console.log(result);
  
				//Add new image to client-side array of objects
				dataObjects.push(result);
  
				//update the DOM
				addCar();
			
				//close and clear
				$("#x").click();
				$("input[name=text]").val('');
				$("input[name=color]").val("#ffffff");
				$("input[name=size]").val('');
				$("input[name=image]").val('');
				$("input[name=bgColor]").val("#000000");
				$("input[name=bold]").prop("checked", false);
				$("input[name=italic]").prop("checked", false);
				$("input[name=underline]").prop("checked", false);
				prevWindow();
			}
		});
	});
}		

