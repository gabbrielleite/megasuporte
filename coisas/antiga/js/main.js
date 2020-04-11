$( ".menuPrincipal li" ).click(function() {
  $(this).addClass( "active" ).siblings().removeClass("active");
  $(".btnClose").css("opacity","1");
  $(".btnClose").css("pointer-events","auto");
});

$( ".btnClose" ).click(function() {
  $(this).css( "opacity","0" );
  $(this).css( "pointer-events","none" );
  $(this).css( "pointer-events","none" );
  $(".btnClose").css("opacity","0");
  $(".menuPrincipal li").removeClass( "active" );
});


$( ".navbar-toggler" ).click(function() {
  /*
  $("span", this).toggleClass("icon-cross");
  */
  $( ".menuPrincipal" ).toggle(
  function() {
    $(".menuPrincipal").css( "display","block" );
  }, function() {
    $(".menuPrincipal").css( "left","0" );
  }
  );
});


// $('#bannerHome').modal('show');

/* -- WOW -- */
$(function(){
  new WOW().init();
});

/**
 * Classe para forçar preenchimento de números inteiros.
 *
 * @author Douglas Santana <douglasantana007@gmail.com>
 * @since 09-10-2019
 */
$('input.inteiro').keyup(function () {
  $($(this)).val($(this).val().replace(/[^0-9]/g, ''));
});
