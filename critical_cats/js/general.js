// General JS and JQ


$(document).ready(function() {
	//SLIDER
$('.slider').each(function(){
  var $this = $(this);                    
  var $group = $this.find('.slide_group'); 
  var $slides = $this.find('.slide');       
  var buttonArray = [];                    
  var currentIndex = 0;                     
  var timeout;
  
  function move(newIndex){
    var animateLeft, slideLeft;
    advance();
    
    if($group.is(':animated') || currentIndex === newIndex){
      return;
    }
    
    buttonArray[currentIndex].removeClass('active');
    buttonArray[newIndex].addClass('active');
    
    if(newIndex > currentIndex){
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({ 
      display: 'block',
      left: slideLeft,
    });
    
    $group.animate({
      left: animateLeft}, function(){
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance(){
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      if(currentIndex < ($slides.length - 1)){
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn').on('click', function(){
    if(currentIndex < ($slides.length - 1)){
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function(){
    if(currentIndex !== 0){
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index){
    var $button = $('<a class="slide_btn">&bull;</a>');
    if(index === currentIndex){
      $button.addClass('active');
    }
    $button.on('click', function(){
      move(index);
    }).appendTo('.slide_buttons');
    buttonArray.push($button);
  });
  
  advance();
});

//DROPDOWN

$("#species").mouseenter(function(){
	$("#dropdown").slideDown();
});

$("#species").mouseleave(function(){
	$("#dropdown").slideUp();
});

// $(function () {
//   $("#species").mouseenter(function () {
//     $this = $(this);
//     $this.data("delay", setTimeout( function () {
//         $this.next("#dropdown").slideDown();
//       }), 500);
//     });
//   $("#species").mouseleave(function () {
//      $this.next("#dropdown").slideUp();
//    });
//   });


// $("#species").hoverIntent({
//     over: function(){$("#dropdown").slideDown();},
//     out: function(){$("#dropdown").slideUp();},
// });



//SPECIES HOVER
var show = function (e){
  var x = "#";
  x += e.target.id ;
  x += " .hover";
	$(x).show();
};

var hide = function () {
	$(".hover").hide();
};

$(".spec_nav").hover(show, hide);


});