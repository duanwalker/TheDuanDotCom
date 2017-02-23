$(document).ready(function(){
      $('.carousel-slider').carousel({
      	full_width: true
      });
    autoplay()   
	function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 5500);
}
      $(".button-collapse").sideNav();//mobile screen menu init

    //  $('.carousel').carousel(); //carousel init

     // $('.slider').slider({full_width: true});//slider init
      //$('.carousel-slider').slider({full_width: true});
    });
        