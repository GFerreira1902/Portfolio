$(document).ready(function() {
    // oculta e exibe o botão quando estiver em determinada área da tela
    $(window).scroll(function() {
    if ($(this).scrollTop() > 200) { // distancia que tem que rolar antes de aparecer
        $('.btntop').fadeIn(250);
    } 
    
    else {
        $('.btntop').fadeOut(250);
    }
    });

});