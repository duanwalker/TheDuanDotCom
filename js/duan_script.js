var top_menu_height = 0;
jQuery(function($) {
        $(window).load( function() {
            $('.external-link').unbind('click');    
        });
        
        $(document).ready( function() {

        
        top_menu_height = $('.duan-top').height();
        // scroll spy to auto active the nav item
        $('body').scrollspy({ target: '#duan-nav-bar', offset: top_menu_height + 10 });
        $('.external-link').unbind('click');

        // scroll to top
        $('#btn-back-to-top').click(function(e){
            e.preventDefault();
            scrollTo('.duan-top');
        });

         
        // scroll to specific id when click on menu
        $('.duan-top .navbar-nav a').click(function(e){
            e.preventDefault(); 
            var linkId = $(this).attr('href');
            scrollTo(linkId);
            if($('.navbar-toggle').is(":visible") == true){
                $('.navbar-collapse').collapse('toggle');
            }
            $(this).blur();
            return false;
        });

        // add inbody class
  var hash = $(this).find('li.active a').attr('href');
  if(hash !== '#duan-welcome-home') {
    $('header navbar').addClass('inbody');
  } else {
    $('header navbar').removeClass('inbody');
  }


  // Add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#duan-welcome-home') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
  });
     

        // to stick navbar on top
      //  $('.duan-top ').stickUp();

        // gallery category
        $('.duan-gallery-category a').click(function(e){
            e.preventDefault(); 
            $(this).parent().children('a').removeClass('active');
            $(this).addClass('duan-service');
            var linkClass = $(this).attr('href');
            $('.gallery').each(function(){
                if($(this).is(":visible") == true){
                   $(this).hide();
                };
            });
            $(linkClass).fadeIn();  
        });
    });
});

// function initialize() {
//     var mapOptions = {
//       zoom: 12,
//       center: new google.maps.LatLng(16.8451789,96.1439764)
//     };

//     var map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);
// }

// scroll animation 
function scrollTo(selectors)
{

    if(!$(selectors).size()) return;
    var selector_top = $(selectors).offset().top - top_menu_height;
    $('html,body').animate({ scrollTop: selector_top }, 'slow');

}
