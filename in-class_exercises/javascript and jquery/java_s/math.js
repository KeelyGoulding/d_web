window.onload = function () {

document.getElementById("go").onclick = calculate;

function calculate() {
var num1  = document.getElementById("value1").value;
var num2  = document.getElementById("value2").value;
var result = num1 * num2;

if (result>1000) {
	text="$$$$";
} else {
	text="thanks"
}

document.getElementById("calculation").innerHTML = "$" + result + " ("+ text +")";

}




}