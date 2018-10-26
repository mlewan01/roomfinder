$(document).on("pagecreate", function(event){
	$("body").bind( "swipeleft swiperight", function (event) { 
		var page = $.mobile.pageContainer.pagecontainer('getActivePage').attr('id'); 
		var dir = event.type; 
		var thisUrl = $(location).attr('search');
		var thisId = thisUrl.split("=")[1];
		
		if(event.target.id === "imagepopupid"){
			var imagePath = $("#imagepopupid").attr('src');
			if (page === "hotelpage" && dir === "swipeleft") {
				var j = imageDisplay(imagePath, 1);
				document.getElementById("imagepopupid").src = "images/"+thisId+"-"+j+".jpg";
				//$("#hoteltitle").text("swiped LEFT");
			} 
			if (page === "hotelpage" && dir === "swiperight"){ 
				var j =imageDisplay(imagePath, -1);
				document.getElementById("imagepopupid").src = "images/"+thisId+"-"+j+".jpg";
				//$("#hoteltitle").text("swiped RIGHT");
			}
		}
		
	})
});

function imageDisplay(img, direction){	
	//testImage("images/1-1.jpg");
	var thisId = $(location).attr('search').split("=")[1];
	var result = img.split("/")[1].split(".")[0].split("-")[1];
	//var id = result.split("-")[0]
	//var imageId = result.split("-")[1];
	var a = 0;
	a = parseInt(direction) + parseInt(result);
	this.imagePropertyMax = 4;
	
	if(a < 1 && direction < 0){
		return imagePropertyMax;
	}
	if(a > imagePropertyMax && direction > 0){
		return 1;
	}
	return a;
}

function testImage(url,imageNext){
$.get(url)
    .done(function() { 
        //alert("success");
		return 1;
    }).fail(function() { 
        // not exists code
		imagePropertyMax = imageNext - 1;
		alert("failure "+imagePropertyMax);
		return 0;
    })
}