// General JS and JQ
$(document).ready(function() {
	$("#species").mouseenter(slideDown);
	
	function slideDown () {
		$("#dropdown").slideDown(fast);
	}
});