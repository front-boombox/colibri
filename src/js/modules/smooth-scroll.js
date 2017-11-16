var smoothScroll = {
  smoothScrollInit: function() {
    var $body = $('body');

    if (!$body.length) {
        return;
    }

    if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		SmoothScroll();
    }
    
  }
};

export default smoothScroll;