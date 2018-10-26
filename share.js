$(document).on("pagecreate", "#home", function (e, ui){
	$("#facebook").bind("tap", function (e){
		$("#sharechannel").html("Facebook");
	});
	$("#twitter").bind("tap", function (e){
		$("#sharechannel").html("Twitter");
	});
	$("#linkedin").bind("tap", function (e){
		$("#sharechannel").html("LinkedIn");
	});
});