var main = function () {
    //new navigation animation
    /* Push the body and the nav over by 285px over */

    $(".navbar-brand").click(function () {
        $('.nav').animate({
            right: "400px"
        }, 200);
    });

}
$(document).ready(main);
