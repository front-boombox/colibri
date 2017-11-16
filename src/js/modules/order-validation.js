var orderValidate = {
    orderValidateInit: function() {
        var $orderWrap = $('.order-form');

        if (!$orderWrap.length) {
            return;
        }

       $orderWrap.validate({
			errorPlacement: function(error, element) {
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

export default orderValidate;