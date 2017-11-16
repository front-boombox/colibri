var wowElem = {
    wowElemInit: function() {
        var $wowElemWrap = $('.wow');

        if (!$wowElemWrap.length) {
            return;
        }

        if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            new WOW().init();
        }

    }

};

export default wowElem;