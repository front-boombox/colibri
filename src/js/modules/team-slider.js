var teamSlider = {
  teamSliderInit: function() {
    var $teamSliderWrap = $('.team-slider');

    if (!$teamSliderWrap.length) {
        return;
    }

    var swiper = new Swiper('.team-slider', {
        pagination: '.team-slider .swiper-pagination',
        paginationClickable: true
    });
  }
};

export default teamSlider;