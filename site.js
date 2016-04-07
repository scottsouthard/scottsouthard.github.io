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

$('header a').on('mouseover', function(){
    $(this).animate({
    'font-size': '3.1em',
  }, 250);
});
$('header a').on('mouseleave', function(){
    $(this).animate({
    'font-size': '3em',
  }, 250);
});
});