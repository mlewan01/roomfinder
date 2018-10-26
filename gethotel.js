$(document).on("pagecontainerbeforeshow", function (e, ui) {
	var page = ui.toPage[0].id;
	if( page == 'myhotels' ) {
		if (typeof(Storage) != "undefined") {
			displayHotelsDetails(getHotelsDetails());
		} else {
			$("#nostorage").text("The browser does not support storage");  
		}
	}
});
function getHotelsDetails(){
	var allHotels = JSON.parse(localStorage.getItem('allHotels'));
	return allHotels;
}

function displayHotelDetails(result) {

		var hotel = "";
		
		var leng = result.length;
		
		if(leng == undefined){
			hotel += "<li><a href='hotel.html?id="+result.id+"'>"+result.name+"</a></li>";
		}else{
			for(var i = 0; i < leng; i++){
				hotel += "<li><a href='hotel.html?id="+result[i].id+"'>"+result[i].name+"</a></li>";
			}
		}
		
		$("#myhotellist").html(hotel).listview("refresh");
}  


function displayHotelsDetails(allDetails){
	if(allDetails == null){
		distable();
		return 0;
	}
	if(allDetails.length == 1){
		displayHotelDetails(allDetails[0]);
		return 1;
	}
	
	var output = "";
	for(var i in allDetails){
			output += "<li><a href='hotel.html?id="+allDetails[i].id+"'>"+allDetails[i].name+"</a></li>";
	}
	$("#myhotellist").html(output).listview("refresh");
	return 2;
}




/*function distable(){
	$('#myhlink1').attr('disabled', 'disabled');

	$(document).on('click', 'a', function(e) {
	    if ($(this).attr('disabled') == 'disabled') {
	        e.preventDefault();
	    }
	});
} */