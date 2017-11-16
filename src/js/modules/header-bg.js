var headerBg = {
  headerBgInit: function() {
    var $heroWrap = $('.hero-image .wrap'),
        $header = $('.header');

    if (!$heroWrap.length) {
        return;
    }
    
    $(document).on('scroll', headerBgFill);

    function headerBgFill(){
        if($(document).scrollTop() > $heroWrap.height() - $header.height()){
            $header.css('background', '#26c6da');
        } else {
            $header.css('background', 'none');
        }
    }
  }
};

export default headerBg;