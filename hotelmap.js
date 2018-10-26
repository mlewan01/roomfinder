$(document).on("pagecontainershow", function (e, ui) {
	var page = ui.toPage[0].id;
	if( page == 'map-page' ) {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(initialize);
		} else {
			documentgetElementById("nogeolocation").innerHTML = "Geolocation is not supported by this browser.";
		}
	}
}); 

function initialize(position) {
	
	var currentHotel = JSON.parse(localStorage.getItem("currentHotel"));
	var hlat = currentHotel.lat;
	var hlng = currentHotel.lng;
	var hotelName = currentHotel.name;

	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	var currentPosition = new google.maps.LatLng(lat, lng);
	var theHotelPosition = new google.maps.LatLng(hlat,hlng);///////////(51.52307, -0.12426);

	var mapOptions = {
		zoom: 11,
		center: currentPosition,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		}
	}

	var hotelMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var currentPositionImage ='http://www.dcs.bbk.ac.uk/lo/mad/madexamples/session5/classactivities/zedlandhotels/icons/currentlocation.png';
	var userPosition  = new google.maps.Marker({
		position: currentPosition,
		map: hotelMap,
		icon: currentPositionImage,
		title: 'You are here'
	});

	var hotelMarkerImage = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=A|FF0000|000000';
	var hotelPosition = new google.maps.Marker({
		position: theHotelPosition,
		map: hotelMap,
		icon: hotelMarkerImage,
		title: hotelName
	});

	var hotelInfo ='<div id="mappopup">'+
	'<h4>'+hotelName+'</h4>'+
	'<p>'+currentHotel.description+'</p>' +
	'</div>'; 

	var hotelInfoWindow = new google.maps.InfoWindow({
		content: hotelInfo
	});

	google.maps.event.addListener(hotelPosition, 'click', function() {
		hotelInfoWindow.open(hotelMap, hotelPosition);
	});
}

