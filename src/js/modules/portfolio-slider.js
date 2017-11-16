var portfolioSlider = {
  portfolioSliderInit: function() {
    var $portfolioSliderWrap = $('.portfolio-slider');

    if (!$portfolioSliderWrap.length) {
        return;
    }

    var swiper = new Swiper('.portfolio-slider', {
        pagination: '.portfolio-block .swiper-pagination',
        slidesPerView: 2,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.portfolio-block .swiper-button-next',
        prevButton: '.portfolio-block .swiper-button-prev',
        breakpoints: {
		    767: {
		      slidesPerView: 1,
		      slidesPerColumn: 1,
		      spaceBetween: 5,
              effect: 'fade'
		    }
		}
    });
  }
};

export default portfolioSlider;
