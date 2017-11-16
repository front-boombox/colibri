(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _heroSlider = require('./modules/hero-slider');

var _heroSlider2 = _interopRequireDefault(_heroSlider);

var _teamSlider = require('./modules/team-slider');

var _teamSlider2 = _interopRequireDefault(_teamSlider);

var _portfolioSlider = require('./modules/portfolio-slider');

var _portfolioSlider2 = _interopRequireDefault(_portfolioSlider);

var _reviewSlider = require('./modules/review-slider');

var _reviewSlider2 = _interopRequireDefault(_reviewSlider);

var _burger = require('./modules/burger');

var _burger2 = _interopRequireDefault(_burger);

var _stickyHeader = require('./modules/sticky-header');

var _stickyHeader2 = _interopRequireDefault(_stickyHeader);

var _parallaxCustom = require('./modules/parallax-custom');

var _parallaxCustom2 = _interopRequireDefault(_parallaxCustom);

var _wowAnimate = require('./modules/wow-animate');

var _wowAnimate2 = _interopRequireDefault(_wowAnimate);

var _gallery = require('./modules/gallery');

var _gallery2 = _interopRequireDefault(_gallery);

var _headerBg = require('./modules/header-bg');

var _headerBg2 = _interopRequireDefault(_headerBg);

var _scrollToSection = require('./modules/scroll-to-section');

var _scrollToSection2 = _interopRequireDefault(_scrollToSection);

var _orderValidation = require('./modules/order-validation');

var _orderValidation2 = _interopRequireDefault(_orderValidation);

var _phoneMask = require('./modules/phone-mask');

var _phoneMask2 = _interopRequireDefault(_phoneMask);

var _smoothScroll = require('./modules/smooth-scroll');

var _smoothScroll2 = _interopRequireDefault(_smoothScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  'use strict';

  // When DOM is ready

  $(function () {
    _heroSlider2.default.heroSliderInit();
    _teamSlider2.default.teamSliderInit();
    _portfolioSlider2.default.portfolioSliderInit();
    _reviewSlider2.default.reviewSliderInit();
    _burger2.default.burgerInit();
    _stickyHeader2.default.stickyHeaderInit();
    _parallaxCustom2.default.parallaxCustomInit();
    _wowAnimate2.default.wowElemInit();
    _gallery2.default.galleryInit();
    _headerBg2.default.headerBgInit();
    _scrollToSection2.default.scrollToSectionInit();
    _orderValidation2.default.orderValidateInit();
    _phoneMask2.default.phoneMaskInit();
    _smoothScroll2.default.smoothScrollInit();
  });
})(jQuery);

},{"./modules/burger":2,"./modules/gallery":3,"./modules/header-bg":4,"./modules/hero-slider":5,"./modules/order-validation":6,"./modules/parallax-custom":7,"./modules/phone-mask":8,"./modules/portfolio-slider":9,"./modules/review-slider":10,"./modules/scroll-to-section":11,"./modules/smooth-scroll":12,"./modules/sticky-header":13,"./modules/team-slider":14,"./modules/wow-animate":15}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var burger = {
    burgerInit: function burgerInit() {
        var $burgerBtn = $('.burger-btn');

        if (!$burgerBtn.length) {
            return;
        }

        $burgerBtn.on('click', function () {
            burgerHandler.call(this);
        });

        function burgerHandler() {
            $(this).toggleClass('active');
            $('.header .menu').toggleClass('active');
        }
    }

};

exports.default = burger;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var gallery = {
    galleryInit: function galleryInit() {
        var $galleryWrap = $('.portfolio-gallery');

        if (!$galleryWrap.length) {
            return;
        }

        document.getElementById('links').onclick = function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement,
                link = target.src ? target.parentNode : target,
                options = { index: link, event: event },
                links = this.getElementsByTagName('a');
            blueimp.Gallery(links, options);
        };
    }
};

exports.default = gallery;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var headerBg = {
    headerBgInit: function headerBgInit() {
        var $heroWrap = $('.hero-image .wrap'),
            $header = $('.header');

        if (!$heroWrap.length) {
            return;
        }

        $(document).on('scroll', headerBgFill);

        function headerBgFill() {
            if ($(document).scrollTop() > $heroWrap.height() - $header.height()) {
                $header.css('background', '#26c6da');
            } else {
                $header.css('background', 'none');
            }
        }
    }
};

exports.default = headerBg;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var heroSlider = {
    heroSliderInit: function heroSliderInit() {
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

exports.default = heroSlider;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});
var orderValidate = {
				orderValidateInit: function orderValidateInit() {
								var $orderWrap = $('.order-form');

								if (!$orderWrap.length) {
												return;
								}

								$orderWrap.validate({
												errorPlacement: function errorPlacement(error, element) {
																return false;
												},
												rules: {
																phone: {
																				required: true
																}
												}
								});
				}

};

exports.default = orderValidate;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var parallaxCustom = {
  parallaxCustomInit: function parallaxCustomInit() {
    var $bgWrap = $('.bg');

    if (!$bgWrap.length) {
      return;
    }

    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $(window).scroll(function () {
        if ($(document).scrollTop() > $('.hero-slider').height() - 300) {
          $('.hero-slider, .hero-block').addClass('slide-up');
          // $('.hero-slider').css('transform', 'translateY(' + ($(this).scrollTop() / -2) + 'px)');
        } else {
          $('.hero-slider, .hero-block').removeClass('slide-up');
        }
        $(".bg1").css("background-position", "50% " + $(this).scrollTop() / -5 + "px");
        $(".bg2").css("background-position", "50% " + $(this).scrollTop() / -10 + "px");
        $(".bg3").css("background-position", "50% " + $(this).scrollTop() / -5 + "px");
        $(".bg4").css("background-position", "50% " + $(this).scrollTop() / -20 + "px");
        $(".bg5").css("background-position", "50% " + $(this).scrollTop() / -5 + "px");

        if ($(document).scrollTop() + $(window).height() > $('.team-block .bg2').offset().top) {
          $('.team-block .swiper-slide').css('transform', 'translateY(' + $(this).scrollTop() / 20 + 'px)');
        }
      });
    }
  }
};

exports.default = parallaxCustom;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var phoneMask = {
    phoneMaskInit: function phoneMaskInit() {
        var $phoneMaskWrap = $('.hero-slider');

        if (!$phoneMaskWrap.length) {
            return;
        }

        $(".phone-input").mask("+38 ( 999 ) 99 99 999");
    }
};

exports.default = phoneMask;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var portfolioSlider = {
    portfolioSliderInit: function portfolioSliderInit() {
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

exports.default = portfolioSlider;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var reviewSlider = {
    reviewSliderInit: function reviewSliderInit() {
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

exports.default = reviewSlider;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var scrollToSection = {
    scrollToSectionInit: function scrollToSectionInit() {
        var $menuLink = $('.menu a, .footer-menu a');

        if (!$menuLink.length) {
            return;
        }

        $menuLink.on('click', function () {
            scrollToSectionHandler($(this).attr('href'));
        });

        function scrollToSectionHandler(str) {
            $('html, body').animate({
                scrollTop: $(str).offset().top
            }, 1000);
        };
    }

};

exports.default = scrollToSection;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var smoothScroll = {
  smoothScrollInit: function smoothScrollInit() {
    var $body = $('body');

    if (!$body.length) {
      return;
    }

    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      SmoothScroll();
    }
  }
};

exports.default = smoothScroll;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var stickyHeader = {
	stickyHeaderInit: function stickyHeaderInit() {
		var $header = $('.header');

		if (!$header.length) {
			return;
		}

		var mainHeader = $('.cd-auto-hide-header'),
		    secondaryNavigation = $('.cd-secondary-nav'),

		//this applies only if secondary nav is below intro section
		belowNavHeroContent = $('.sub-nav-hero'),
		    headerHeight = mainHeader.height();

		//set scrolling variables
		var scrolling = false,
		    previousTop = 0,
		    currentTop = 0,
		    scrollDelta = 10,
		    scrollOffset = 150;

		mainHeader.on('click', '.nav-trigger', function (event) {
			// open primary navigation on mobile
			event.preventDefault();
			mainHeader.toggleClass('nav-open');
		});

		$(window).on('scroll', function () {
			if (!scrolling) {
				scrolling = true;
				!window.requestAnimationFrame ? setTimeout(autoHideHeader, 250) : requestAnimationFrame(autoHideHeader);
			}
		});

		$(window).on('resize', function () {
			headerHeight = mainHeader.height();
		});

		function autoHideHeader() {
			var currentTop = $(window).scrollTop();

			belowNavHeroContent.length > 0 ? checkStickyNavigation(currentTop) // secondary navigation below intro
			: checkSimpleNavigation(currentTop);

			previousTop = currentTop;
			scrolling = false;
		}

		function checkSimpleNavigation(currentTop) {
			//there's no secondary nav or secondary nav is below primary nav
			if (previousTop - currentTop > scrollDelta) {
				//if scrolling up...
				mainHeader.removeClass('is-hidden');
			} else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
				//if scrolling down...
				mainHeader.addClass('is-hidden');
			}
		}

		function checkStickyNavigation(currentTop) {
			//secondary nav below intro section - sticky secondary nav
			var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();

			if (previousTop >= currentTop) {
				//if scrolling up... 
				if (currentTop < secondaryNavOffsetTop) {
					//secondary nav is not fixed
					mainHeader.removeClass('is-hidden');
					secondaryNavigation.removeClass('fixed slide-up');
					belowNavHeroContent.removeClass('secondary-nav-fixed');
				} else if (previousTop - currentTop > scrollDelta) {
					//secondary nav is fixed
					mainHeader.removeClass('is-hidden');
					secondaryNavigation.removeClass('slide-up').addClass('fixed');
					belowNavHeroContent.addClass('secondary-nav-fixed');
				}
			} else {
				//if scrolling down...	
				if (currentTop > secondaryNavOffsetTop + scrollOffset) {
					//hide primary nav
					mainHeader.addClass('is-hidden');
					secondaryNavigation.addClass('fixed slide-up');
					belowNavHeroContent.addClass('secondary-nav-fixed');
				} else if (currentTop > secondaryNavOffsetTop) {
					//once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset 
					mainHeader.removeClass('is-hidden');
					secondaryNavigation.addClass('fixed').removeClass('slide-up');
					belowNavHeroContent.addClass('secondary-nav-fixed');
				}
			}
		}
	}
};

exports.default = stickyHeader;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var teamSlider = {
    teamSliderInit: function teamSliderInit() {
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

exports.default = teamSlider;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var wowElem = {
    wowElemInit: function wowElemInit() {
        var $wowElemWrap = $('.wow');

        if (!$wowElemWrap.length) {
            return;
        }

        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            new WOW().init();
        }
    }

};

exports.default = wowElem;

},{}]},{},[1]);
