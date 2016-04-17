$(document).ready(function(){
$("input[name=password").on("focus", function(){
	alert("Must be at least 8 characters and contain a number");

});

$("input[name=studentId]").on("blur", function(){
var check = $(this)[0].checkValidity();

 $(this)[0].setCustomValidity("your number must be 16 digits");

if (check == false){
	$(this).after($(this)[0].validationMessage);
}

});

$("#submit").on("click", function(){
	var name= $("input[name=name]").val();
	$("#submit").after(name);
});

$("input[name=web]").on("keydown", function(event){
if (event.which == 13){
	$("#submit").click();
	console.log("submitted");
}
});


});