var burger = {
    burgerInit: function() {
        var $burgerBtn = $('.burger-btn');

        if (!$burgerBtn.length) {
            return;
        }

        $burgerBtn.on('click', function() {
            burgerHandler.call(this);
        });

        function burgerHandler(){
          $(this).toggleClass('active');
          $('.header .menu').toggleClass('active');
        }

    }

};

export default burger;