$('.home-client-carousel').owlCarousel({
    loop:true,
    margin:80,
    nav:false,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:2
        },
        480:{
            items:3
        },          
        767:{
            items:4
        },
        1000:{
            items:6
        }
    }
});

$('.home-10-client-carousel').owlCarousel({
    loop:true,
    margin:80,
    nav:false,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:2
        },
        480:{
            items:3
        },          
        767:{
            items:4
        },
        1000:{
            items:5
        }
    }
});

/* --------------------------------------------------
* project carousel
* --------------------------------------------------*/

 $(".project-slider").owlCarousel({
    stagePadding: 365,
    nav:false,
    dots: true,
    loop:true,
    navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
    responsive:{
        1400:{
            stagePadding: 365,
            items:2
        },
        1200:{
            stagePadding: false,
            items:3
        },
        992:{
            stagePadding: false,
            items:2
        },
        767:{
            stagePadding: false,
            items:2
        },
        0:{
            stagePadding: false,
            items:1
        }
    }
 });

 $(".project-slider-i15").owlCarousel({
    nav:false,
    dots: true,
    loop:true,
    navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
    responsive:{
        1200:{
            items:3
        },
        767:{
            items:2
        },
        0:{
            items:1
        }
    }
 });

 $(".simple-slider").owlCarousel({
    nav:false,
    dots: true,
    loop:true,
    navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
    responsive:{
        1000:{
            items:2
        },
        600:{
            items:2
        },
        0:{
            items:1
        }
    }
 });

 $('.single-product').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: false,
    callbacks: true,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
});


/*Gallery Post*/
$(".gallery-post").owlCarousel({
    items:1,
    nav:true,
    dots: false,
    auto: true,
    loop:true,
    navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
    responsive: []
});

/* --------------------------------------------------
* Testimonial carousel
* --------------------------------------------------*/
 $(".ot-testimonials-slider").owlCarousel({
    nav:true,
    dots: false,
    loop:true,
    navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
    responsive:{
        1000:{
            items:2
        },
        767:{
            nav:false,
            dots: true,
            items:2
        },
        0:{
            nav:false,
            dots: true,
            items:1
        }
    }
 });

 $(".ot-testimonials-slider-2").owlCarousel({
    nav:false,
    dots: true,
    loop:true,
    navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
    responsive:{
        1200:{
            items:4
        },
        767:{
            nav:false,
            dots: true,
            items:2
        },
        0:{
            nav:false,
            dots: true,
            items:1
        }
    }
 });

 $(".ot-testimonials-slider-dots").owlCarousel({
    nav:true,
    dots: true,
    loop:true,
    navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
    responsive:{
        1000:{
            items:2
        },
        767:{
            nav:false,
            dots: true,
            items:2
        },
        0:{
            nav:false,
            dots: true,
            items:1
        }
    }
 });

 $(".ot-testimonials-slider-12").owlCarousel({
    nav:false,
    dots: true,
    loop:true,
    navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
    responsive:{
        1200:{
            items:4
        },
        1000:{
            items:2
        },
        767:{
            nav:false,
            dots: true,
            items:2
        },
        0:{
            nav:false,
            dots: true,
            items:1
        }
    }
 });

 $('.ot-testimonials-slider-3').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: false,
    callbacks: true,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
});

 $('.ot-testimonials-slider-15').owlCarousel({
    items: 1,
    nav:true,
    dots: false,
    loop:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed:500,
    navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
    startPosition: 'URLHash'
});
/* --------------------------------------------------
* industis carousel
* --------------------------------------------------*/

 $(".ot-industries-slider").owlCarousel({
    stagePadding: 365,
    items:2,
    nav:false,
    dots: true,
    loop:true,
    navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
    responsive:{
        1600:{
            stagePadding: 365,
            items:2
        },
        1200:{
            stagePadding: 200,
            items:2
        },
        992:{
            stagePadding: false,
            items:2
        },
        0:{
            stagePadding: false,
            items:1
        }
    }
 });

 $(".ot-team-slider").owlCarousel({
    nav:true,
    dots: true,
    loop:true,
    navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
    responsive:{
        1000:{
            items:4,
            margin: 30
        },
        767:{
            nav:false,
            dots: true,
            items:2
        },
        0:{
            nav:false,
            dots: true,
            items:1
        }
    }
 });

 $(".roadmap-slide").owlCarousel({
    nav:false,
    dots: true,
    loop:true,
    navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
    responsive:{
        1000:{
            items:5,
        },
        767:{
            nav:false,
            dots: true,
            items:2
        },
        0:{
            nav:false,
            dots: true,
            items:1
        }
    }
 });