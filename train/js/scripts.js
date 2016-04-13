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
		$("#container").foggy();
		$("#filter").fadeIn();
		$("#add").fadeIn();
		$("body").css("overflow-x", "hidden");
	});
	
	$("#x").on("click", function(){
		$("#container").foggy(false);
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
	
//DOWNLOAD DATA
	$("#download").on("click", function(e) {
		e.preventDefault();
		var dataDownload = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataObjects));
		$("#download").attr("href", "data:" + dataDownload);
		window.location = document.getElementById('download').href
	});


/////////////////////////////////////////////////////////


	car1 = new car("text", "white", "0.5", "bold", "", "", "", "red");
	car2 = new car("#2", "blue", "1", "", "italic", "underline", "", "pink");

	//////constructor in JSON?
	function car(text, color, size, b, i, u, image, bgColor) {
		this.text = text;
		this.color = color;
		this.size = size;
		this.b = b;
		this.i = i;
		this.u = u;
		this.image = image;
		this.bgColor = bgColor;
	}
	
	var thoughts = [car1, car2];//JSON takes place of array
	
	////////
	function addCar() {
	$("#cars").empty();
	
	thoughts.forEach(function(data){
	
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
	
		$content.css("background-color", data.bgColor); 
		$content.text(data.text);
		$content.css("color", data.color); 
		//$content.css("font-size", data.size + "px");
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
		
		//DON'T UPLOAD IMAGE IF THERE IS NONE
		$content.css("background-image", "url:" + data.image); 
	});
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
		var image = $("input[name=image]").val();
		var bgColor = $("input[name=bgColor]").val();
	
		preview.css("background-color", bgColor); 
		preview.css("background-image", image); 
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
	}
	
	$("input").on("focus keyup blur click change", function(){
		return prevWindow();
	}); 
	
	$("input[name=text]").on("keydown", function(event) {
		if (event.which == 13){
			$("#submit").click();
		}
	});
	
	$("#submit").on("click", function(){
		
		var text = $("input[name=text]").val();
		var color = $("input[name=color]").val();
		var size = $("input[name=size]").val();
		var image = $("input[name=image]").val();
		var bgColor = $("input[name=bgColor]").val();
		var b = $("input[name=bold]:checked").val();
		var i = $("input[name=italic]:checked").val();
		var u = $("input[name=underline]:checked").val();
		
		var newCar = new car(text, color, size, b, i, u, image, bgColor);
		console.log(newCar);

	///////////////	

	            //Add new object to client-side array of objects
	           	thoughts.push(newCar);

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
				
				//lengthen train
				var $width = (40 * thoughts.length);
				$("#train").css("width", $width + "vw");
	    	    $("#background").css("width", $width+40 + "vw");
	    });
	   
	});
		

