var phoneMask = {
  phoneMaskInit: function() {
    var $phoneMaskWrap = $('.hero-slider');

    if (!$phoneMaskWrap.length) {
        return;
    }

    $(".phone-input").mask("+38 ( 999 ) 99 99 999");
  }
};

export default phoneMask;