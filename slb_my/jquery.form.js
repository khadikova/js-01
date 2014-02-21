$(document).ready(function(){
	$("form span").hide();
	
	var submitForm = $(".submit_button");
	var required = $("input.required");
	console.log(required);
	

	function containsBlanks(){
		/*var blanks = $("input.required").map(function(){
			return $(this).val() == "";
		})*/
		var blanks = new Array();
		$("input.required").each(function(){
			blanks.push($(this).val() == "");
		});
		
		//return $.inArray(true,blanks) != -1;
		return blanks.indexOf(true) != -1;
		//return blanks.sort().pop();
	};
	
	function isValidEmail(email){
		return email.indexOf("@") != -1;
	};
	
	function requiredFields(){
		if(containsBlanks() || !isValidEmail($("#email").val())){
			submitForm.prop("disabled",true);
		}
		else{
			submitForm.removeAttr("disabled","disabled");
		}
		//alert("Fill out the required fields");
	};
	
	$("input, textarea").focus(function(){
		$(this).next().fadeIn("slow");
	}).blur(function(){
		$(this).next().fadeOut("slow");
	}).keyup(function(){
		//check all fields for values
		//requiredFields();
	});
	$("#email").keyup(function(){
		if (isValidEmail($(this).val())){
			$(this).next().removeClass("error").addClass("valid");
		}
		else {
			$(this).next().removeClass("valid").addClass("error");
		}
	});

	requiredFields();

});


