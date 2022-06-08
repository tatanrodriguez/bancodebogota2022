$('.boton1').click(function () {
    $('.mapa1').css({'display' : 'block'});
    $('.boton1').css({'box-shadow' : 'rgba(0,0,0,.3) 0px 2px 8px'});

    $('.mapa2').css({'display' : 'none'});
    $('.boton2').css({'box-shadow' : 'none'});
})

$('.boton2').click(function () {
    $('.mapa2').css({'display' : 'block'});
    $('.boton2').css({'box-shadow' : 'rgba(0,0,0,.3) 0px 2px 8px'});

    $('.mapa1').css({'display' : 'none'});
    $('.boton1').css({'box-shadow' : 'none'});
})