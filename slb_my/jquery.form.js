$(document).ready(function(){
	$("form span").hide();
	
	var submitForm = $(".submit_button input");
	var fields = document.getElementsByClassName("required");
	console.log(fields);
	function requiredFields(){
		for (var i=0; i<fields.length; i++){
			if (fields[i].length <= 0){
				submitForm.attr("disabled","disabled");
				alert("Fill out the required fields");
				break;
				}
			else {
				submitForm.removeAttr("disabled");
				}
			}
		};
	
	$("input, textarea").focus(function(){
		$(this).next().fadeIn("slow");
	}).blur(function(){
		$(this).next().fadeOut("slow");
	}).keyup(function(){
		//check all fields for values
		requiredFields();
	});
	$("#email").keyup(function(){
		if (true){
			$(this).next().removeClass("error").addClass("valid");
		}
		else {
			$(this).next().removeClass("valid").addClass("error");
		}
	});
	requiredFields();
});


