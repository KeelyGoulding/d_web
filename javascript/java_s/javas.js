window.onload = function() {

var happy = ":D";
var meh = ":/";
var sad = ":(";
var mood = document.getElementById("mood");



document.getElementById("happy").onmouseover = function(){

		mood.innerHTML = happy;
		mood.style.color = "orange";
	};
document.getElementById("meh").onmouseover= function(){

		mood.innerHTML = meh;
		mood.style.color = "green";
	};
document.getElementById("sad").onmouseover = function(){

		mood.innerHTML = sad;
		mood.style.color = "lightblue";
	};




}