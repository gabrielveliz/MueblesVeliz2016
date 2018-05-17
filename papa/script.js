$(document).ready(function() {
    $('#columna1').mouseenter(function() {
        $('#columna1').fadeTo('fast', 1);
    });
    $("#columna1").mouseleave(function(){
        $("#columna1").fadeTo("slow",0.5)
        });
});
$(document).ready(function() {
    $('#columna2').mouseenter(function() {
        $('#columna2').fadeTo('fast', 1);
    });
    $("#columna2").mouseleave(function(){
        $("#columna2").fadeTo("slow",0.5)
        });
});
$(document).ready(function() {
    $('#cuerpo').mouseenter(function() {
        $('#cuerpo').fadeTo('fast', 1);
    });
    $("#cuerpo").mouseleave(function(){
        $("#cuerpo").fadeTo("slow",0.7)
        });
});