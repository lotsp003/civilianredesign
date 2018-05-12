$(document).ready(function() {



  // parallax
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
  // slideshow


  $('.trigger_about').click(function() {
     $('.about').toggleClass('open');
    $('.page-wrapper').toggleClass('blur');
     return false;
  });

    $('.trigger_music').click(function() {
     $('.music').toggleClass('open');
    $('.page-wrapper').toggleClass('blur');
     return false;
  });

        $('.trigger_tour').click(function() {
     $('.tour').toggleClass('open');
    $('.page-wrapper').toggleClass('blur');
     return false;
  });

         $('.trigger_contact').click(function() {
     $('.contact').toggleClass('open');
    $('.page-wrapper').toggleClass('blur');
     return false;
  });

   $('.colorchange').click(function(){
    $(".colorchange").css("color", "#840200");
    $(this).css("color", "white");

     $(".colorchange").css("font-weight", "normal");
    $(this).css("font-weight", "bold");

      $(".colorchange").css("border-bottom", "none");
    $(this).css("border-bottom", "3px solid white");

   

    

  });
// song
var audio1 = document.createElement('audio');
	audio1.setAttribute('src', 'sounds/Skulls.mp3');

	$('#skulls').click(function(){
		audio1.play();


	});

  $('#skulls').dblclick(function() {
		audio1.pause();
	});

	// song

  //song

  var audio2 = document.createElement('audio');
		audio2.setAttribute('src', 'sounds/Reasons.mp3');

		$('#reasons').click(function(){
		audio2.play();
	});

	$('#reasons').dblclick(function() {
		audio2.pause();
		audio2.currentTime = 0;
	});

  //song

  // song
var audio3 = document.createElement('audio');
  audio3.setAttribute('src', 'sounds/Borrowed.mp3');

  $('#borrowed').click(function(){
    audio3.play();


  });

  $('#borrowed').dblclick(function() {
    audio3.pause();
  });

  // song

    // song
var audio4 = document.createElement('audio');
  audio4.setAttribute('src', 'sounds/NewLove.mp3');

  $('#newlove').click(function(){
    audio4.play();


  });

  $('#newlove').dblclick(function() {
    audio4.pause();
  });

  // song

      // song
var audio5 = document.createElement('audio');
  audio5.setAttribute('src', 'sounds/cutandrun.mp3');

  $('#cutandrun').click(function(){
    audio5.play();


  });

  $('#cutandrun').dblclick(function() {
    audio5.pause();
  });

  // song

        // song
var audio6 = document.createElement('audio');
  audio6.setAttribute('src', 'sounds/Caroline.mp3');

  $('#caroline').click(function(){
    audio6.play();




  });

  $('#caroline').dblclick(function() {
    audio6.pause();
  });

  // song

    // song

        // song
var audio7 = document.createElement('audio');
  audio7.setAttribute('src', 'sounds/Patience.mp3');

  $('#patience').click(function(){
    audio7.play();


  });

  $('#patience').dblclick(function() {
    audio7.pause();
  });

  // song

          // song
var audio8 = document.createElement('audio');
  audio8.setAttribute('src', 'sounds/Michael.mp3');

  $('#michael').click(function(){
    audio8.play();


  });

  $('#michael').dblclick(function() {
    audio8.pause();
  });

  // song

            // song
var audio9 = document.createElement('audio');
  audio9.setAttribute('src', 'sounds/itoldyou.mp3');

  $('#itoldyou').click(function(){
    audio9.play();


  });

  $('#itoldyou').dblclick(function() {
    audio9.pause();
  });

  // song
            // song
var audio10 = document.createElement('audio');
  audio10.setAttribute('src', 'sounds/Topography.mp3');

  $('#topography').click(function(){
    audio10.play();


  });

  $('#topography').dblclick(function() {
    audio10.pause();
  });

  // song  
// song
var audio11 = document.createElement('audio');
  audio11.setAttribute('src', 'sounds/therealthing.mp3');

  $('#therealthing').click(function(){
    audio11.play();


  });

  $('#therealthing').dblclick(function() {
    audio11.pause();
  });

  // song  

// song
var audio12 = document.createElement('audio');
  audio12.setAttribute('src', 'sounds/Judas.mp3');

  $('#judas').click(function(){
    audio12.play();


  });

  $('#judas').dblclick(function() {
    audio12.pause();
  });

  // song  

  // random element
$(function () {
    var images = ['c2.jpeg', 'c4.jpg'];
    $('.full').css({
        'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'
    });
});

var scene = $('#scene').get(0);
var parallaxInstance = new Parallax(scene);
  
 

});