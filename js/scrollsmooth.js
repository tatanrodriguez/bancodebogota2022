

$('.links').click(function (e) {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 700);
    return false;
    e.preventDefault()
    
});


$('.topbtn').click(function (e) {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 700);
    e.preventDefault()
    
})

