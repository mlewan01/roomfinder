// checks if the local storage is supported
$(document).on("pagecreate", function() {
   $( "#addbtn" ).click(function() {
      if (typeof(Storage) != "undefined") {
	    setDetails(getId(), getName());
      } else {
        $("#nostorage").text("The browser does not support local storage");
      }
    });
});  

// returns the id of the current hotel
function getId() {
	var title = $("#hotelid").text();
	return title;
}

// returns the name of the current hotel
function getName() {
	var name = $("#hoteltitle").text();
	//var url = title.replace(/\s+/g, '-').toLowerCase();
	return name;
}

// reads favourite list from local storage
function getHotelsDetails(){
	var allHotels = 0;
	allHotels = JSON.parse(localStorage.getItem('allHotels'));
	
	if(JSON.parse(localStorage.getItem('allHotels')) == null){
		//alert("yest !!");
		return 0;
	}
	
	return allHotels;
}

// check if the hotel is in the favourite list
function checkHotelsDetails(id, name){
	var allDetails = getHotelsDetails();
	
	for(var i in allDetails){
		if(allDetails[i].id == id){
			if(allDetails[i].name = name){
				
				return i;
			}
		}
	}
	return -1;
}

// if a property is already in the favourite list then it will remove it
function remove(nr){
	
	var nrHot = getNumberOfHotels();
	
 	var existingEntries = JSON.parse(localStorage.getItem("allHotels"));

	existingEntries.splice(nr, 1);
	
    localStorage.setItem("allHotels", JSON.stringify(existingEntries));
	
	localStorage.setItem("numberOfHotels", JSON.stringify(nrHot-1));
	
}
 
// safes a property to a local storage given its id and name
function setDetails(id, name){
	var v = checkHotelsDetails(id, name);
	if(v > -1){
		$("#addhotelinfopopup").text("Removed");
		remove(v);
		return 0;
	}
	
	var nrHot = getNumberOfHotels();
	if(nrHot == null) nrHot = 0;
 	var existingEntries = JSON.parse(localStorage.getItem("allHotels"));
    if(existingEntries == null) existingEntries = [];

	var hotel = {id: id, name: name};
	$("#addhotelinfopopup").text("Added");
	existingEntries.push(hotel);
    localStorage.setItem("allHotels", JSON.stringify(existingEntries));
	
	localStorage.setItem("numberOfHotels", JSON.stringify(nrHot+1));
}

// returns number of properties safet to local storage
 function getNumberOfHotels() {
	var hotelNr = JSON.parse(localStorage.getItem('numberOfHotels'));
	return hotelNr;
}