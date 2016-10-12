function advance_carousel() {
	var active = $('#index_carousel .active');
	var next = (active.next().length > 0) ? active.next() : $('#index_carousel img:first');
	next.css('z-index',2); //move next image to right under active but above all others
	active.fadeOut(1500, function() { //fade out top img
		active.css('z-index', 1).show().removeClass('active'); //move previously active img to back with other images, display: block, and remove active class
		next.css('z-index',3).addClass('active'); //make next image active and put on top of all
	});
}


var main = function() {
	setInterval('advance_carousel()', 8000); //switch img every 8 seconds
};


$(document).ready(main);