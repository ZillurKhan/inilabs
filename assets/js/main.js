(function ($) {
    "use strict";

    
    if (('.banner-hero-slider').length) {
            
        $('.banner-hero-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 800, 
            arrows: false,
            dots: true, 
        });
    }

    if (('.our-teacher-slider').length) {
        $('.our-teacher-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 9000, 
            arrows: true,
            margin: '20px',
            dots: false,
            delay: 0,
            responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
            ]
        }); 
    }

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
     
    
    //Videos popup jQuery 
    var popup = $('.custom-popup');
    if (popup.length) {
        $('.custom-popup').magnificPopup({
        disableOn: 10,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
        });
    }


})(jQuery);