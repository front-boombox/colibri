var parallaxCustom = {
  parallaxCustomInit: function() {
    var $bgWrap = $('.bg');

    if (!$bgWrap.length) {
        return;
    }

    if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $(window).scroll(function () {
          if($(document).scrollTop() > $('.hero-slider').height() - 300){
            $('.hero-slider, .hero-block').addClass('slide-up');
            // $('.hero-slider').css('transform', 'translateY(' + ($(this).scrollTop() / -2) + 'px)');
          } else {
            $('.hero-slider, .hero-block').removeClass('slide-up');
          }
          $(".bg1").css("background-position","50% " + ($(this).scrollTop() / -5) + "px");
          $(".bg2").css("background-position","50% " + ($(this).scrollTop() / -10) + "px");
          $(".bg3").css("background-position","50% " + ($(this).scrollTop() / -5) + "px");
          $(".bg4").css("background-position","50% " + ($(this).scrollTop() / -20) + "px");
          $(".bg5").css("background-position","50% " + ($(this).scrollTop() / -5) + "px");

          if($(document).scrollTop() + $(window).height() > $('.team-block .bg2').offset().top){
            $('.team-block .swiper-slide').css('transform', 'translateY(' + ($(this).scrollTop() / 20) + 'px)');
          }
      });
    }
  }
};

export default parallaxCustom;