;(function($) {
	"use strict";

	$('.ba-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		infinity: true,
		autoplay: false,
		fade: true,
	});
})(jQuery);

;(function($) {
	"use strict";

	
	$('.slider-life').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.slider-life',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		prevArrow: '<button class="prev"></button>',
		nextArrow: '<button class="next"></button>'
	});
})(jQuery);

var map;
function initMap() {

	var markerBA = {lat: 41.894035, lng: 12.490514};

	map = new google.maps.Map(document.getElementById('map'), {
		center: markerBA,
		zoom: 15,
		disableDefaultUI: true,
		styles: [
		{
			"featureType": "road.arterial",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"color": "#fffc87"
			}
			]
		}
		]
	});
}

const googleMapsScript = document.createElement('script');
googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC-cDL1H-TK5ESfz1Z_kgUTq07k83I4_28&callback=initMap';
document.head.appendChild(googleMapsScript);