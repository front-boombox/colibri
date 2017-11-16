var scrollToSection = {
    scrollToSectionInit: function() {
        var $menuLink = $('.menu a, .footer-menu a');

        if (!$menuLink.length) {
            return;
        }

        $menuLink.on('click', function(){
            scrollToSectionHandler($(this).attr('href'));
        });

        function scrollToSectionHandler(str){
            $('html, body').animate({
                scrollTop: $(str).offset().top
            }, 1000);
        };

    }

};

export default scrollToSection;