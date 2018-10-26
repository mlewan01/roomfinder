/*$().ready(function() {*/
$(document).bind("pagecreate", function() {
	$("#form4").validate({
		rules:{
			studentNo: {
				required: true,
				minlength: 8,
				maxlength: 8,
				number: true
			},
			name: {
				required: true,
				minlength: 2
			},
			surname: {
				required: true,
				minlength: 2
			},
			date: {
				required: true
			}
		}
	}),
	$("#form2").validate({
		rules:{
			user1: {
				required: true,
				email: true
			},
			pass1: {
				required: true,
				minlength: 5
			}
		},
		messages:{
			user1: {
				required: "enter an email",
				email: "not valid email"
			},
			pass1: {
				required: "Please provide a password",
				minglength: "Password must be at least 5 characters"
			}
		}
	});
	$("#form3").validate({
		rules:{
			email2: {
				required: true,
				email: true
			},
			pass2: {
				required: true,
				minlength: 5
			},
			pass2rep: {
				required: true,
				minlength: 5,
				equalTo: "#pass2"
			},
			agree: "required"
		},
		messages:{
			pass2: {
				required: "Please provide a password",
				minlength: "Password must be at least 5 characters"
			},
			pass2rep: {
				required: "Please provide a password",
				minlength: "Password must be at least 5 characters",
				equalTo: "Repeat as above"
			},
			agree: "Please accept our policy"
		}
	});
});