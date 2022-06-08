let $owl = $('.loop1');


$owl.owlCarousel({
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 800,
    center: true,
    stagePadding: 1,
    loop: true,
    margin: 1,
    nav: true,
    navText: ['',''],
    animateOut: false,
    animateIn: false,
    responsiveClass:true,
    responsive: {
        0:{
            items:1,
            nav:false
        },
        1150:{
            items:2,
            nav:true
        },
    }
});

let $owl2 = $('.loop2');
  
$owl2.owlCarousel({
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 800,
    center: true,
    items: 1,
    stagePadding: 1,
    loop: true,
    margin: 1,
    nav: true,
    navText: ['',''],
    animateOut: false,
    animateIn: false,
});
