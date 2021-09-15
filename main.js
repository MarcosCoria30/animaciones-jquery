//Jquery efectos y animaciones

// Las imagenes aparecen ocultas al principio
$("#homero").hide();
$("#homeroViaje").hide();
$("#cambiosfort").hide();

//---fadeToggle----//  
$('#muestraOculta').click(function(){
    $('#homeroViaje').fadeToggle(2000, function(){
        if ($('#muestraOculta').html() == 'Viajar al pasado') {
            $('#muestraOculta').html('Volver al precente');
        } else {
            $('#muestraOculta').html("Volver al precente ");
        }
    });
});

//---SLIDE---// 

$('#slideImagen').click(()=> {
    $('#homero').slideDown('fast');
});
$('#slideImagenUp').click(()=> {
    $('#homero').slideUp('slow');
});


$('#cambiosbtn').click(()=> {
    $('#cambiosfort').slideDown('fast');
});

$('#slideImagenUp').click(()=> {
    $('#cambiosfort').slideUp('slow');
});