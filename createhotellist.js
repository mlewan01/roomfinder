$(document).on("pagecontainerbeforeshow", function (e, ui){
	console.log("now");
	var page = ui.toPage[0].id;
	if( page == 'search' ){
		$.get("data/hotels.json", function(result, status){
			var hotel = "";
			for(var i = 0; i < result.length; i++){
				//hotel += "<li><a href='hotel.html?id="+result[i].id+"'>"+result[i].name+"</a></li>";
				hotel += "<li><a href='hotel.html?id=" + 
					result[i].id +
					"'><img src='images/" +
					result[i].id +
					"-1.jpg'>" +
					result[i].type + " in " + 
					result[i].code + " area for £" + 
					result[i].price + " a week" +
					"</a></li>";
			}
		$("#hotellist").html(hotel).listview("refresh");
		}, "json");
	}
});