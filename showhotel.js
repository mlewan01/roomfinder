// populates the hotel.html page with data from apropriate .json files
$(document).on("pagecontainerbeforeshow", function (e, ui) {
	var page = ui.toPage[0].id;
    if(page === 'hotelpage') {
	var thisPage = "#" + page;
	var thisUrl = $(location).attr('search'); 
	var thisId = thisUrl.split("=")[1];
		$.get("data/hotel" + thisId +".json", function(result, status) {
			$("#hoteltitle", thisPage).text(
				result.type + " in " + 
				result.code + " area for £" + 
				result.price + " a week.");
			$("#hotelid", thisPage).html(thisId);
			var hotel = "<p>"+result.stars+"</p><p>"+result.description+"</p>";
			$("#contentArea", thisPage).html(hotel);
			$("#image-main", thisPage).html("<img src='images/"+thisId+"-1.jpg' alt='property house 1 image' style='width: 70%; height: 70%'>");
			$("#imageinfopopup", thisPage).text(result.name);
			document.getElementById("imagepopupid").src = "images/"+thisId+"-"+1+".jpg";
			var currentHotel = {id: thisId, name: result.name, lat:result.lat, lng:result.lng, description:result.description};
			localStorage.setItem("currentHotel", JSON.stringify(currentHotel));
		}, "json");
	}
});