var heroSlider = {
  heroSliderInit: function() {
    var $heroSliderWrap = $('.hero-slider');

    if (!$heroSliderWrap.length) {
        return;
    }

    var swiper = new Swiper('.hero-slider', {
        pagination: '.hero-slider .swiper-pagination',
        paginationClickable: true,
        effect: 'fade'
    });
  }
};

export default heroSlider;