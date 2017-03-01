$(document).ready(function(){
  var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
});
});