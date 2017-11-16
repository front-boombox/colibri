var gallery = {
  galleryInit: function() {
    var $galleryWrap = $('.portfolio-gallery');

    if (!$galleryWrap.length) {
        return;
    }

    document.getElementById('links').onclick = function (event) {
	    event = event || window.event;
	    var target = event.target || event.srcElement,
	        link = target.src ? target.parentNode : target,
	        options = {index: link, event: event},
	        links = this.getElementsByTagName('a');
	    blueimp.Gallery(links, options);
	};
  }
};

export default gallery;