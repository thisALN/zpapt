$('#lowerBackground').hide();
$('#lowerBackground').fadeIn(1500);

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
},  5000);

$(document).ready(main);