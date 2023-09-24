$(document).ready(function(){
    $("nav a").on('click',function(){
      var link = $(this).attr('href'); 
      if ($(window).width() <= 841) { // se tamanho da janela for menor ou igual vdd senao falso
        // Lógica para dispositivos móveis
        $('html,body').animate({scrollTop: ($(link).offset().top - 216)}, 'slow');
      } else {
        // Lógica para desktop
        $('html,body').animate({scrollTop: ($(link).offset().top - 100)}, 'slow');
      }
      return false;
    })
  });