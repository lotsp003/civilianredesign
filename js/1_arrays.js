$(document).ready(function() {

	var animals = ["YOU WOULDN’T BELIEVE WHAT PRIVILEGE COSTS", 
	"TRUTH, LIKE LOVE, IS HARD TO FIND", "SHOULD THIS NOOSE UNLOOSEN"];
	var images = ["1.png", "2.png", "3.png"];
	var songs = ["1, 2, 3", "2", "3", "4"]

	$("#button").click(function(){

	var x = Math.floor(Math.random() * images.length);
	
	$(".content2").css({"background-image":"url(images/" + images[x] + ")"});
	$("#text").html(animals[x]);
	$(".content3").html(songs[x]);


});

	
});