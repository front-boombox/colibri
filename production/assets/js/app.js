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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxidXJnZXIuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxnYWxsZXJ5LmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcaGVhZGVyLWJnLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcaGVyby1zbGlkZXIuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxvcmRlci12YWxpZGF0aW9uLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xccGFyYWxsYXgtY3VzdG9tLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xccGhvbmUtbWFzay5qcyIsInNyY1xcanNcXG1vZHVsZXNcXHBvcnRmb2xpby1zbGlkZXIuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxyZXZpZXctc2xpZGVyLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcc2Nyb2xsLXRvLXNlY3Rpb24uanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxzbW9vdGgtc2Nyb2xsLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcc3RpY2t5LWhlYWRlci5qcyIsInNyY1xcanNcXG1vZHVsZXNcXHRlYW0tc2xpZGVyLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcd293LWFuaW1hdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLENBQUUsVUFBQyxDQUFELEVBQU87QUFDUDs7QUFFQTs7QUFDQSxJQUFFLFlBQU07QUFDTix5QkFBVyxjQUFYO0FBQ0EseUJBQVcsY0FBWDtBQUNBLDhCQUFnQixtQkFBaEI7QUFDQSwyQkFBYSxnQkFBYjtBQUNBLHFCQUFPLFVBQVA7QUFDQSwyQkFBYSxnQkFBYjtBQUNBLDZCQUFlLGtCQUFm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QUE3QjtBQUNBLEtBTEQsTUFLTyxJQUFJLGFBQWEscUJBQWpCLEVBQXlDO0FBQy9DO0FBQ0EsZ0JBQVcsV0FBWCxDQUF1QixXQUF2QjtBQUNBLHlCQUFvQixRQUFwQixDQUE2QixPQUE3QixFQUFzQyxXQUF0QyxDQUFrRCxVQUFsRDtBQUNBLHlCQUFvQixRQUFwQixDQUE2QixxQkFBN0I7QUFDQTtBQUVEO0FBQ0o7QUFFQztBQWpHZ0IsQ0FBbkI7O2tCQW9HZSxZOzs7Ozs7OztBQ3BHZixJQUFJLGFBQWE7QUFDZixvQkFBZ0IsMEJBQVc7QUFDekIsWUFBSSxrQkFBa0IsRUFBRSxjQUFGLENBQXRCOztBQUVBLFlBQUksQ0FBQyxnQkFBZ0IsTUFBckIsRUFBNkI7QUFDekI7QUFDSDs7QUFFRCxZQUFJLFNBQVMsSUFBSSxNQUFKLENBQVcsY0FBWCxFQUEyQjtBQUNwQyx3QkFBWSxpQ0FEd0I7QUFFcEMsaUNBQXFCO0FBRmUsU0FBM0IsQ0FBYjtBQUlEO0FBWmMsQ0FBakI7O2tCQWVlLFU7Ozs7Ozs7O0FDZmYsSUFBSSxVQUFVO0FBQ1YsaUJBQWEsdUJBQVc7QUFDcEIsWUFBSSxlQUFlLEVBQUUsTUFBRixDQUFuQjs7QUFFQSxZQUFJLENBQUMsYUFBYSxNQUFsQixFQUEwQjtBQUN0QjtBQUNIOztBQUVELFlBQUksQ0FBQyxpRUFBaUUsSUFBakUsQ0FBc0UsVUFBVSxTQUFoRixDQUFMLEVBQWtHO0FBQzlGLGdCQUFJLEdBQUosR0FBVSxJQUFWO0FBQ0g7QUFFSjs7QUFaUyxDQUFkOztrQkFnQmUsTyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgaGVyb1NsaWRlciBmcm9tICcuL21vZHVsZXMvaGVyby1zbGlkZXInO1xyXG5pbXBvcnQgdGVhbVNsaWRlciBmcm9tICcuL21vZHVsZXMvdGVhbS1zbGlkZXInO1xyXG5pbXBvcnQgcG9ydGZvbGlvU2xpZGVyIGZyb20gJy4vbW9kdWxlcy9wb3J0Zm9saW8tc2xpZGVyJztcclxuaW1wb3J0IHJldmlld1NsaWRlciBmcm9tICcuL21vZHVsZXMvcmV2aWV3LXNsaWRlcic7XHJcbmltcG9ydCBidXJnZXIgZnJvbSAnLi9tb2R1bGVzL2J1cmdlcic7XHJcbmltcG9ydCBzdGlja3lIZWFkZXIgZnJvbSAnLi9tb2R1bGVzL3N0aWNreS1oZWFkZXInO1xyXG5pbXBvcnQgcGFyYWxsYXhDdXN0b20gZnJvbSAnLi9tb2R1bGVzL3BhcmFsbGF4LWN1c3RvbSc7XHJcbmltcG9ydCB3b3dFbGVtIGZyb20gJy4vbW9kdWxlcy93b3ctYW5pbWF0ZSc7XHJcbmltcG9ydCBnYWxsZXJ5IGZyb20gJy4vbW9kdWxlcy9nYWxsZXJ5JztcclxuaW1wb3J0IGhlYWRlckJnIGZyb20gJy4vbW9kdWxlcy9oZWFkZXItYmcnO1xyXG5pbXBvcnQgc2Nyb2xsVG9TZWN0aW9uIGZyb20gJy4vbW9kdWxlcy9zY3JvbGwtdG8tc2VjdGlvbic7XHJcbmltcG9ydCBvcmRlclZhbGlkYXRlIGZyb20gJy4vbW9kdWxlcy9vcmRlci12YWxpZGF0aW9uJztcclxuaW1wb3J0IHBob25lTWFzayBmcm9tICcuL21vZHVsZXMvcGhvbmUtbWFzayc7XHJcbmltcG9ydCBzbW9vdGhTY3JvbGwgZnJvbSAnLi9tb2R1bGVzL3Ntb290aC1zY3JvbGwnO1xyXG5cclxuKCAoJCkgPT4ge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgLy8gV2hlbiBET00gaXMgcmVhZHlcclxuICAkKCgpID0+IHtcclxuICAgIGhlcm9TbGlkZXIuaGVyb1NsaWRlckluaXQoKTtcclxuICAgIHRlYW1TbGlkZXIudGVhbVNsaWRlckluaXQoKTtcclxuICAgIHBvcnRmb2xpb1NsaWRlci5wb3J0Zm9saW9TbGlkZXJJbml0KCk7XHJcbiAgICByZXZpZXdTbGlkZXIucmV2aWV3U2xpZGVySW5pdCgpO1xyXG4gICAgYnVyZ2VyLmJ1cmdlckluaXQoKTtcclxuICAgIHN0aWNreUhlYWRlci5zdGlja3lIZWFkZXJJbml0KCk7XHJcbiAgICBwYXJhbGxheEN1c3RvbS5wYXJhbGxheEN1c3RvbUluaXQoKTtcclxuICAgIHdvd0VsZW0ud293RWxlbUluaXQoKTtcclxuICAgIGdhbGxlcnkuZ2FsbGVyeUluaXQoKTtcclxuICAgIGhlYWRlckJnLmhlYWRlckJnSW5pdCgpO1xyXG4gICAgc2Nyb2xsVG9TZWN0aW9uLnNjcm9sbFRvU2VjdGlvbkluaXQoKTtcclxuICAgIG9yZGVyVmFsaWRhdGUub3JkZXJWYWxpZGF0ZUluaXQoKTtcclxuICAgIHBob25lTWFzay5waG9uZU1hc2tJbml0KCk7XHJcbiAgICBzbW9vdGhTY3JvbGwuc21vb3RoU2Nyb2xsSW5pdCgpO1xyXG4gIH0pO1xyXG5cclxufSkoalF1ZXJ5KTsiLCJ2YXIgYnVyZ2VyID0ge1xyXG4gICAgYnVyZ2VySW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyICRidXJnZXJCdG4gPSAkKCcuYnVyZ2VyLWJ0bicpO1xyXG5cclxuICAgICAgICBpZiAoISRidXJnZXJCdG4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRidXJnZXJCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGJ1cmdlckhhbmRsZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYnVyZ2VySGFuZGxlcigpe1xyXG4gICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAkKCcuaGVhZGVyIC5tZW51JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnVyZ2VyOyIsInZhciBnYWxsZXJ5ID0ge1xyXG4gIGdhbGxlcnlJbml0OiBmdW5jdGlvbigpIHtcclxuICAgIHZhciAkZ2FsbGVyeVdyYXAgPSAkKCcucG9ydGZvbGlvLWdhbGxlcnknKTtcclxuXHJcbiAgICBpZiAoISRnYWxsZXJ5V3JhcC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmtzJykub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdCAgICBldmVudCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcclxuXHQgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50LFxyXG5cdCAgICAgICAgbGluayA9IHRhcmdldC5zcmMgPyB0YXJnZXQucGFyZW50Tm9kZSA6IHRhcmdldCxcclxuXHQgICAgICAgIG9wdGlvbnMgPSB7aW5kZXg6IGxpbmssIGV2ZW50OiBldmVudH0sXHJcblx0ICAgICAgICBsaW5rcyA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTtcclxuXHQgICAgYmx1ZWltcC5HYWxsZXJ5KGxpbmtzLCBvcHRpb25zKTtcclxuXHR9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbGxlcnk7IiwidmFyIGhlYWRlckJnID0ge1xyXG4gIGhlYWRlckJnSW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgJGhlcm9XcmFwID0gJCgnLmhlcm8taW1hZ2UgLndyYXAnKSxcclxuICAgICAgICAkaGVhZGVyID0gJCgnLmhlYWRlcicpO1xyXG5cclxuICAgIGlmICghJGhlcm9XcmFwLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsIGhlYWRlckJnRmlsbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGVhZGVyQmdGaWxsKCl7XHJcbiAgICAgICAgaWYoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiAkaGVyb1dyYXAuaGVpZ2h0KCkgLSAkaGVhZGVyLmhlaWdodCgpKXtcclxuICAgICAgICAgICAgJGhlYWRlci5jc3MoJ2JhY2tncm91bmQnLCAnIzI2YzZkYScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRoZWFkZXIuY3NzKCdiYWNrZ3JvdW5kJywgJ25vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyQmc7IiwidmFyIGhlcm9TbGlkZXIgPSB7XHJcbiAgaGVyb1NsaWRlckluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyICRoZXJvU2xpZGVyV3JhcCA9ICQoJy5oZXJvLXNsaWRlcicpO1xyXG5cclxuICAgIGlmICghJGhlcm9TbGlkZXJXcmFwLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLmhlcm8tc2xpZGVyJywge1xyXG4gICAgICAgIHBhZ2luYXRpb246ICcuaGVyby1zbGlkZXIgLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICBwYWdpbmF0aW9uQ2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIGVmZmVjdDogJ2ZhZGUnXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZXJvU2xpZGVyOyIsInZhciBvcmRlclZhbGlkYXRlID0ge1xyXG4gICAgb3JkZXJWYWxpZGF0ZUluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciAkb3JkZXJXcmFwID0gJCgnLm9yZGVyLWZvcm0nKTtcclxuXHJcbiAgICAgICAgaWYgKCEkb3JkZXJXcmFwLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICRvcmRlcldyYXAudmFsaWRhdGUoe1xyXG5cdFx0XHRlcnJvclBsYWNlbWVudDogZnVuY3Rpb24oZXJyb3IsIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJ1bGVzOiB7XHJcblx0ICAgICAgIFx0XHRwaG9uZToge1xyXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcclxuXHQgICAgICAgXHRcdH1cclxuXHQgICAgICAgIH1cclxuXHRcdH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvcmRlclZhbGlkYXRlOyIsInZhciBwYXJhbGxheEN1c3RvbSA9IHtcclxuICBwYXJhbGxheEN1c3RvbUluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyICRiZ1dyYXAgPSAkKCcuYmcnKTtcclxuXHJcbiAgICBpZiAoISRiZ1dyYXAubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCAhL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICkge1xyXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiAkKCcuaGVyby1zbGlkZXInKS5oZWlnaHQoKSAtIDMwMCl7XHJcbiAgICAgICAgICAgICQoJy5oZXJvLXNsaWRlciwgLmhlcm8tYmxvY2snKS5hZGRDbGFzcygnc2xpZGUtdXAnKTtcclxuICAgICAgICAgICAgLy8gJCgnLmhlcm8tc2xpZGVyJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgnICsgKCQodGhpcykuc2Nyb2xsVG9wKCkgLyAtMikgKyAncHgpJyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaGVyby1zbGlkZXIsIC5oZXJvLWJsb2NrJykucmVtb3ZlQ2xhc3MoJ3NsaWRlLXVwJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkKFwiLmJnMVwiKS5jc3MoXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCIsXCI1MCUgXCIgKyAoJCh0aGlzKS5zY3JvbGxUb3AoKSAvIC01KSArIFwicHhcIik7XHJcbiAgICAgICAgICAkKFwiLmJnMlwiKS5jc3MoXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCIsXCI1MCUgXCIgKyAoJCh0aGlzKS5zY3JvbGxUb3AoKSAvIC0xMCkgKyBcInB4XCIpO1xyXG4gICAgICAgICAgJChcIi5iZzNcIikuY3NzKFwiYmFja2dyb3VuZC1wb3NpdGlvblwiLFwiNTAlIFwiICsgKCQodGhpcykuc2Nyb2xsVG9wKCkgLyAtNSkgKyBcInB4XCIpO1xyXG4gICAgICAgICAgJChcIi5iZzRcIikuY3NzKFwiYmFja2dyb3VuZC1wb3NpdGlvblwiLFwiNTAlIFwiICsgKCQodGhpcykuc2Nyb2xsVG9wKCkgLyAtMjApICsgXCJweFwiKTtcclxuICAgICAgICAgICQoXCIuYmc1XCIpLmNzcyhcImJhY2tncm91bmQtcG9zaXRpb25cIixcIjUwJSBcIiArICgkKHRoaXMpLnNjcm9sbFRvcCgpIC8gLTUpICsgXCJweFwiKTtcclxuXHJcbiAgICAgICAgICBpZigkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKSA+ICQoJy50ZWFtLWJsb2NrIC5iZzInKS5vZmZzZXQoKS50b3Ape1xyXG4gICAgICAgICAgICAkKCcudGVhbS1ibG9jayAuc3dpcGVyLXNsaWRlJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgnICsgKCQodGhpcykuc2Nyb2xsVG9wKCkgLyAyMCkgKyAncHgpJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhcmFsbGF4Q3VzdG9tOyIsInZhciBwaG9uZU1hc2sgPSB7XHJcbiAgcGhvbmVNYXNrSW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgJHBob25lTWFza1dyYXAgPSAkKCcuaGVyby1zbGlkZXInKTtcclxuXHJcbiAgICBpZiAoISRwaG9uZU1hc2tXcmFwLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiLnBob25lLWlucHV0XCIpLm1hc2soXCIrMzggKCA5OTkgKSA5OSA5OSA5OTlcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGhvbmVNYXNrOyIsInZhciBwb3J0Zm9saW9TbGlkZXIgPSB7XHJcbiAgcG9ydGZvbGlvU2xpZGVySW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgJHBvcnRmb2xpb1NsaWRlcldyYXAgPSAkKCcucG9ydGZvbGlvLXNsaWRlcicpO1xyXG5cclxuICAgIGlmICghJHBvcnRmb2xpb1NsaWRlcldyYXAubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcucG9ydGZvbGlvLXNsaWRlcicsIHtcclxuICAgICAgICBwYWdpbmF0aW9uOiAnLnBvcnRmb2xpby1ibG9jayAuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgc2xpZGVzUGVyQ29sdW1uOiAyLFxyXG4gICAgICAgIHBhZ2luYXRpb25DbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICBuZXh0QnV0dG9uOiAnLnBvcnRmb2xpby1ibG9jayAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2QnV0dG9uOiAnLnBvcnRmb2xpby1ibG9jayAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG5cdFx0ICAgIDc2Nzoge1xyXG5cdFx0ICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuXHRcdCAgICAgIHNsaWRlc1BlckNvbHVtbjogMSxcclxuXHRcdCAgICAgIHNwYWNlQmV0d2VlbjogNSxcclxuICAgICAgICAgICAgICBlZmZlY3Q6ICdmYWRlJ1xyXG5cdFx0ICAgIH1cclxuXHRcdH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvcnRmb2xpb1NsaWRlcjtcclxuIiwidmFyIHJldmlld1NsaWRlciA9IHtcclxuICByZXZpZXdTbGlkZXJJbml0OiBmdW5jdGlvbigpIHtcclxuICAgIHZhciAkcmV2aWV3U2xpZGVyV3JhcCA9ICQoJy5yZXZpZXctc2xpZGVyJyk7XHJcblxyXG4gICAgaWYgKCEkcmV2aWV3U2xpZGVyV3JhcC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5yZXZpZXctc2xpZGVyJywge1xyXG4gICAgICAgIHBhZ2luYXRpb246ICcucmV2aWV3LWJsb2NrIC5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgcGFnaW5hdGlvbkNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICBuZXh0QnV0dG9uOiAnLnJldmlldy1ibG9jayAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2QnV0dG9uOiAnLnJldmlldy1ibG9jayAuc3dpcGVyLWJ1dHRvbi1wcmV2J1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3U2xpZGVyOyIsInZhciBzY3JvbGxUb1NlY3Rpb24gPSB7XHJcbiAgICBzY3JvbGxUb1NlY3Rpb25Jbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgJG1lbnVMaW5rID0gJCgnLm1lbnUgYSwgLmZvb3Rlci1tZW51IGEnKTtcclxuXHJcbiAgICAgICAgaWYgKCEkbWVudUxpbmsubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRtZW51TGluay5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzY3JvbGxUb1NlY3Rpb25IYW5kbGVyKCQodGhpcykuYXR0cignaHJlZicpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsVG9TZWN0aW9uSGFuZGxlcihzdHIpe1xyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoc3RyKS5vZmZzZXQoKS50b3BcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsVG9TZWN0aW9uOyIsInZhciBzbW9vdGhTY3JvbGwgPSB7XHJcbiAgc21vb3RoU2Nyb2xsSW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XHJcblxyXG4gICAgaWYgKCEkYm9keS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoICEvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgKSB7XHJcblx0XHRTbW9vdGhTY3JvbGwoKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNtb290aFNjcm9sbDsiLCJ2YXIgc3RpY2t5SGVhZGVyID0ge1xyXG4gIHN0aWNreUhlYWRlckluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyICRoZWFkZXIgPSAkKCcuaGVhZGVyJyk7XHJcblxyXG4gICAgaWYgKCEkaGVhZGVyLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWFpbkhlYWRlciA9ICQoJy5jZC1hdXRvLWhpZGUtaGVhZGVyJyksXHJcblx0XHRzZWNvbmRhcnlOYXZpZ2F0aW9uID0gJCgnLmNkLXNlY29uZGFyeS1uYXYnKSxcclxuXHRcdC8vdGhpcyBhcHBsaWVzIG9ubHkgaWYgc2Vjb25kYXJ5IG5hdiBpcyBiZWxvdyBpbnRybyBzZWN0aW9uXHJcblx0XHRiZWxvd05hdkhlcm9Db250ZW50ID0gJCgnLnN1Yi1uYXYtaGVybycpLFxyXG5cdFx0aGVhZGVySGVpZ2h0ID0gbWFpbkhlYWRlci5oZWlnaHQoKTtcclxuXHJcblx0Ly9zZXQgc2Nyb2xsaW5nIHZhcmlhYmxlc1xyXG5cdHZhciBzY3JvbGxpbmcgPSBmYWxzZSxcclxuXHRcdHByZXZpb3VzVG9wID0gMCxcclxuXHRcdGN1cnJlbnRUb3AgPSAwLFxyXG5cdFx0c2Nyb2xsRGVsdGEgPSAxMCxcclxuXHRcdHNjcm9sbE9mZnNldCA9IDE1MDtcclxuXHJcblx0bWFpbkhlYWRlci5vbignY2xpY2snLCAnLm5hdi10cmlnZ2VyJywgZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0Ly8gb3BlbiBwcmltYXJ5IG5hdmlnYXRpb24gb24gbW9iaWxlXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bWFpbkhlYWRlci50b2dnbGVDbGFzcygnbmF2LW9wZW4nKTtcclxuXHR9KTtcclxuXHJcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG5cdFx0aWYoICFzY3JvbGxpbmcgKSB7XHJcblx0XHRcdHNjcm9sbGluZyA9IHRydWU7XHJcblx0XHRcdCghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcclxuXHRcdFx0XHQ/IHNldFRpbWVvdXQoYXV0b0hpZGVIZWFkZXIsIDI1MClcclxuXHRcdFx0XHQ6IHJlcXVlc3RBbmltYXRpb25GcmFtZShhdXRvSGlkZUhlYWRlcik7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdCQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKXtcclxuXHRcdGhlYWRlckhlaWdodCA9IG1haW5IZWFkZXIuaGVpZ2h0KCk7XHJcblx0fSk7XHJcblxyXG5cdGZ1bmN0aW9uIGF1dG9IaWRlSGVhZGVyKCkge1xyXG5cdFx0dmFyIGN1cnJlbnRUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG5cdFx0KCBiZWxvd05hdkhlcm9Db250ZW50Lmxlbmd0aCA+IDAgKSBcclxuXHRcdFx0PyBjaGVja1N0aWNreU5hdmlnYXRpb24oY3VycmVudFRvcCkgLy8gc2Vjb25kYXJ5IG5hdmlnYXRpb24gYmVsb3cgaW50cm9cclxuXHRcdFx0OiBjaGVja1NpbXBsZU5hdmlnYXRpb24oY3VycmVudFRvcCk7XHJcblxyXG5cdCAgIFx0cHJldmlvdXNUb3AgPSBjdXJyZW50VG9wO1xyXG5cdFx0c2Nyb2xsaW5nID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjaGVja1NpbXBsZU5hdmlnYXRpb24oY3VycmVudFRvcCkge1xyXG5cdFx0Ly90aGVyZSdzIG5vIHNlY29uZGFyeSBuYXYgb3Igc2Vjb25kYXJ5IG5hdiBpcyBiZWxvdyBwcmltYXJ5IG5hdlxyXG5cdCAgICBpZiAocHJldmlvdXNUb3AgLSBjdXJyZW50VG9wID4gc2Nyb2xsRGVsdGEpIHtcclxuXHQgICAgXHQvL2lmIHNjcm9sbGluZyB1cC4uLlxyXG5cdCAgICBcdG1haW5IZWFkZXIucmVtb3ZlQ2xhc3MoJ2lzLWhpZGRlbicpO1xyXG5cdCAgICB9IGVsc2UgaWYoIGN1cnJlbnRUb3AgLSBwcmV2aW91c1RvcCA+IHNjcm9sbERlbHRhICYmIGN1cnJlbnRUb3AgPiBzY3JvbGxPZmZzZXQpIHtcclxuXHQgICAgXHQvL2lmIHNjcm9sbGluZyBkb3duLi4uXHJcblx0ICAgIFx0bWFpbkhlYWRlci5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XHJcblx0ICAgIH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNoZWNrU3RpY2t5TmF2aWdhdGlvbihjdXJyZW50VG9wKSB7XHJcblx0XHQvL3NlY29uZGFyeSBuYXYgYmVsb3cgaW50cm8gc2VjdGlvbiAtIHN0aWNreSBzZWNvbmRhcnkgbmF2XHJcblx0XHR2YXIgc2Vjb25kYXJ5TmF2T2Zmc2V0VG9wID0gYmVsb3dOYXZIZXJvQ29udGVudC5vZmZzZXQoKS50b3AgLSBzZWNvbmRhcnlOYXZpZ2F0aW9uLmhlaWdodCgpIC0gbWFpbkhlYWRlci5oZWlnaHQoKTtcclxuXHRcdFxyXG5cdFx0aWYgKHByZXZpb3VzVG9wID49IGN1cnJlbnRUb3AgKSB7XHJcblx0ICAgIFx0Ly9pZiBzY3JvbGxpbmcgdXAuLi4gXHJcblx0ICAgIFx0aWYoIGN1cnJlbnRUb3AgPCBzZWNvbmRhcnlOYXZPZmZzZXRUb3AgKSB7XHJcblx0ICAgIFx0XHQvL3NlY29uZGFyeSBuYXYgaXMgbm90IGZpeGVkXHJcblx0ICAgIFx0XHRtYWluSGVhZGVyLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcclxuXHQgICAgXHRcdHNlY29uZGFyeU5hdmlnYXRpb24ucmVtb3ZlQ2xhc3MoJ2ZpeGVkIHNsaWRlLXVwJyk7XHJcblx0ICAgIFx0XHRiZWxvd05hdkhlcm9Db250ZW50LnJlbW92ZUNsYXNzKCdzZWNvbmRhcnktbmF2LWZpeGVkJyk7XHJcblx0ICAgIFx0fSBlbHNlIGlmKCBwcmV2aW91c1RvcCAtIGN1cnJlbnRUb3AgPiBzY3JvbGxEZWx0YSApIHtcclxuXHQgICAgXHRcdC8vc2Vjb25kYXJ5IG5hdiBpcyBmaXhlZFxyXG5cdCAgICBcdFx0bWFpbkhlYWRlci5yZW1vdmVDbGFzcygnaXMtaGlkZGVuJyk7XHJcblx0ICAgIFx0XHRzZWNvbmRhcnlOYXZpZ2F0aW9uLnJlbW92ZUNsYXNzKCdzbGlkZS11cCcpLmFkZENsYXNzKCdmaXhlZCcpOyBcclxuXHQgICAgXHRcdGJlbG93TmF2SGVyb0NvbnRlbnQuYWRkQ2xhc3MoJ3NlY29uZGFyeS1uYXYtZml4ZWQnKTtcclxuXHQgICAgXHR9XHJcblx0ICAgIFx0XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgIFx0Ly9pZiBzY3JvbGxpbmcgZG93bi4uLlx0XHJcblx0IFx0ICBcdGlmKCBjdXJyZW50VG9wID4gc2Vjb25kYXJ5TmF2T2Zmc2V0VG9wICsgc2Nyb2xsT2Zmc2V0ICkge1xyXG5cdCBcdCAgXHRcdC8vaGlkZSBwcmltYXJ5IG5hdlxyXG5cdCAgICBcdFx0bWFpbkhlYWRlci5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XHJcblx0ICAgIFx0XHRzZWNvbmRhcnlOYXZpZ2F0aW9uLmFkZENsYXNzKCdmaXhlZCBzbGlkZS11cCcpO1xyXG5cdCAgICBcdFx0YmVsb3dOYXZIZXJvQ29udGVudC5hZGRDbGFzcygnc2Vjb25kYXJ5LW5hdi1maXhlZCcpO1xyXG5cdCAgICBcdH0gZWxzZSBpZiggY3VycmVudFRvcCA+IHNlY29uZGFyeU5hdk9mZnNldFRvcCApIHtcclxuXHQgICAgXHRcdC8vb25jZSB0aGUgc2Vjb25kYXJ5IG5hdiBpcyBmaXhlZCwgZG8gbm90IGhpZGUgcHJpbWFyeSBuYXYgaWYgeW91IGhhdmVuJ3Qgc2Nyb2xsZWQgbW9yZSB0aGFuIHNjcm9sbE9mZnNldCBcclxuXHQgICAgXHRcdG1haW5IZWFkZXIucmVtb3ZlQ2xhc3MoJ2lzLWhpZGRlbicpO1xyXG5cdCAgICBcdFx0c2Vjb25kYXJ5TmF2aWdhdGlvbi5hZGRDbGFzcygnZml4ZWQnKS5yZW1vdmVDbGFzcygnc2xpZGUtdXAnKTtcclxuXHQgICAgXHRcdGJlbG93TmF2SGVyb0NvbnRlbnQuYWRkQ2xhc3MoJ3NlY29uZGFyeS1uYXYtZml4ZWQnKTtcclxuXHQgICAgXHR9XHJcblxyXG5cdCAgICB9XHJcblx0fVxyXG5cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdGlja3lIZWFkZXI7IiwidmFyIHRlYW1TbGlkZXIgPSB7XHJcbiAgdGVhbVNsaWRlckluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyICR0ZWFtU2xpZGVyV3JhcCA9ICQoJy50ZWFtLXNsaWRlcicpO1xyXG5cclxuICAgIGlmICghJHRlYW1TbGlkZXJXcmFwLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnRlYW0tc2xpZGVyJywge1xyXG4gICAgICAgIHBhZ2luYXRpb246ICcudGVhbS1zbGlkZXIgLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICBwYWdpbmF0aW9uQ2xpY2thYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZWFtU2xpZGVyOyIsInZhciB3b3dFbGVtID0ge1xyXG4gICAgd293RWxlbUluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciAkd293RWxlbVdyYXAgPSAkKCcud293Jyk7XHJcblxyXG4gICAgICAgIGlmICghJHdvd0VsZW1XcmFwLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggIS9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApIHtcclxuICAgICAgICAgICAgbmV3IFdPVygpLmluaXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdvd0VsZW07Il19
