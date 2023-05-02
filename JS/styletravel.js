$('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    // nav:true,
    items:3,
    autoplay:true,
    autoplayTimeout:6000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})


$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.click-ontop').addClass('gogo');
    }
    else {
        $('.click-ontop').removeClass('gogo');
    }
})

