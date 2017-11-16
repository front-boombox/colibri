var reviewSlider = {
  reviewSliderInit: function() {
    var $reviewSliderWrap = $('.review-slider');

    if (!$reviewSliderWrap.length) {
        return;
    }

    var swiper = new Swiper('.review-slider', {
        pagination: '.review-block .swiper-pagination',
        paginationClickable: true,
        nextButton: '.review-block .swiper-button-next',
        prevButton: '.review-block .swiper-button-prev'
    });
  }
};

export default reviewSlider;