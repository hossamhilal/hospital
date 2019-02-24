$(window).on('load', function () {
    $('.loader').fadeOut(500, function () {
        $(this).remove();
    });      
});



/*global $ */
$(document).ready(function ($) {
    'use strict';
 
    // Open navbarSide when button is clicked
    $('.header-nav .nav-btn').on('click', function () {
        $(this).toggleClass('open');
        $('.nav-menu').toggleClass('show-sidenav');
        $('.header-nav .over-lay').toggleClass('show-overlay');
        $('body').toggleClass('no-scroll');
    });
    $('.header-nav .over-lay').on('click', function () {
        $('.header-nav .nav-btn').removeClass('open');
        $('.nav-menu').removeClass('show-sidenav');
        $('.header-nav .over-lay').removeClass('show-overlay');
        $('body').css('overflow-y','auto');
    });

    if (screen.width < 991) {
        $('.nav-link').click(function(){
            $(this).next('.drop-list').toggle();
        });
    }


    // STICKY NAV  FIXED
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.header-nav').addClass("navbar-fixed-top");
        }
        else {
            $('.header-nav').removeClass("navbar-fixed-top");
        }
    });

    // SKITTLER SLIDERa
    $('.skitter-large').skitter({
        dots: true, 
        theme: 'clean',
        navigation: true,
        enable_navigation_keys: true,
        navigation: true,
        progressbar: true 
    });

    // BTN ANIMATION 
    $('.btn-green')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });


    $('.photos-wrapper').masonry({
        itemSelector: '.photo-box'
    });

    
    // FAQ QUESTIONS SHOW ANSWER
    var quest   =  $('.question-box');
    var q_btn   =  quest.find('.question');
    var answer  =  quest.find('.answer');
    q_btn.click(function(){
        $(this).parent(quest).find(answer).slideToggle();
        $(this).find('.icon').toggleClass('plus');
    });

    // FAQ SiTE MAP 
    var map_block  =  $('.site-map-page .map-block');
    var map_head   =  map_block.find('.map-title');
    var map_body   =  map_block.find('.map-content');
    map_head.click(function(){
        $(this).parent(map_block).find(map_body).slideToggle();
        $(this).find('.icon').toggleClass('plus');
    });

    // HOME VIDEOS OWL
    $('.videos-owl').owlCarousel({
        rtl: true,
        margin: 15,
        autoplay: true,
        loop: true,
        nav: true,
        dots:true,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // HOME PHOTOS OWL
    $('.photos-owl').owlCarousel({
        rtl: true,
        margin: 15,
        autoplay: true,
        loop: true,
        nav: true,
        dots:true,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // HOME RELATED SITES OWL
    $('.related-sites-owl').owlCarousel({
        rtl: true,
        margin: 15,
        autoplay: true,
        loop: true,
        nav: true,
        dots:true,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    // ABOUT  OWL
    $('.about-owl').owlCarousel({
        rtl: true,
        margin: 10,
        autoplay: true,
        loop: true,
        nav: true,
        dots:true,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    
    // RELATED DEVICES 
    $('.related-devices-owl').owlCarousel({
        rtl: true,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        dots:true,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

});


