$(document).ready(function(){

$('nav a img').on('mouseover', function(){
    $(this).animate({
    'width': '45px',
  }, 250);
});
$('nav a img').on('mouseleave', function(){
    $(this).animate({
    'width': '40px',
  }, 250);
});
});