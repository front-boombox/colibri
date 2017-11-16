import heroSlider from './modules/hero-slider';
import teamSlider from './modules/team-slider';
import portfolioSlider from './modules/portfolio-slider';
import reviewSlider from './modules/review-slider';
import burger from './modules/burger';
import stickyHeader from './modules/sticky-header';
import parallaxCustom from './modules/parallax-custom';
import wowElem from './modules/wow-animate';
import gallery from './modules/gallery';
import headerBg from './modules/header-bg';
import scrollToSection from './modules/scroll-to-section';
import orderValidate from './modules/order-validation';
import phoneMask from './modules/phone-mask';
import smoothScroll from './modules/smooth-scroll';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    heroSlider.heroSliderInit();
    teamSlider.teamSliderInit();
    portfolioSlider.portfolioSliderInit();
    reviewSlider.reviewSliderInit();
    burger.burgerInit();
    stickyHeader.stickyHeaderInit();
    parallaxCustom.parallaxCustomInit();
    wowElem.wowElemInit();
    gallery.galleryInit();
    headerBg.headerBgInit();
    scrollToSection.scrollToSectionInit();
    orderValidate.orderValidateInit();
    phoneMask.phoneMaskInit();
    smoothScroll.smoothScrollInit();
  });

})(jQuery);