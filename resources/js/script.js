$(document).ready(function() {

    /* For the sticky navigation*/
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
        }
    );

    /* Scroll on buttons */
    $('js--scroll-to-plan').click(function() {
        $('html, body').animate({ scrollTop: $('.js--section-plan').offset().top}, 1000);
    });

    $('js--scroll-to-start').click(function() {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* Animation on scroll  */

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    })

/*  
    var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
    }, {
    offset: '25%'
    })
*/

});