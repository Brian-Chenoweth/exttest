$.validator.setDefaults( {
			submitHandler: function () {
				//alert( "Your inquiry has been submitted!" );
				
				var postData = $('#cform').serialize();
                  $.post('processcontact.php', postData+'&action=submit&ajaxrequest=1', function(msg) {
                  if (msg) {
                  $('#cform').before(msg);
                  }
                  });
				
			//var str = document.getElementById('captcha');
            //if (str.match(/^([a-zA-Z]{6,})$/)) {
            //console.log("match!");
           // }
				$('#cform').get(0).reset();
				alert( "Your inquiry has been submitted!" );
				return false;
			}
			//else {
				
				//alert( "Your form has a problem!" );
				//return false;
			//}
			//}
		});
		
		$(document).ready(function () {
			
			var captcha1 = document.getElementById('captcha');
			
			$.validator.addMethod("lettersonly", function(value) {
            return value.match (/^[A-Z]+$/);
            }, "Capital letters only!"); 
			
			$.validator.addMethod("matchcaptcha", function(value){
				return value.match (captcha1);
			},   "Refresh Captcha and re-enter!");
			
			/*
			$.validator.addMethod("cpEmail", function(value, element) {
            return this.optional(element) || /^.+@calpoly\.edu$/.test(value);
            }, "Must be a Cal Poly email address.");
			*/
			
			// handles validation
			$( "#cform" ).validate( {
				rules: {
					fname: "required",
					lname: "required",
					email: {
						required: true,
						email: true
					},
					ccomment: "required",
					captcha_challenge: {
						required: true,
						lettersonly: true,
						matchcaptcha: true,
						minlength: 6,
						maxlength: 6 }
				},
				messages: {
					fname: "Please enter your first name",
					lname: "Please enter your last name",
					email: "Please enter a valid email address",
					//cpEmail: "Please enter a Cal Poly email",
					captcha_challenge: {
                      required: "Please enter the captcha",
                      minlength: jQuery.validator.format("6 characters required!"),
                      maxlength: jQuery.validator.format("6 characters required!")
                      }
				},
				errorElement: "em",
				errorPlacement: function (error, element) {
					// Add the `invalid-feedback` class to the error element
					error.addClass("invalid-feedback");

					if (element.prop("type") === "radio") {
						error.insertAfter(element.next("label") );
					} else {
						error.insertAfter(element);
					}
				},
				//highlight: function ( element, errorClass, validClass ) {
				highlight: function (element) {
					$(element).addClass( "is-invalid" ).removeClass( "is-valid" );
				},
				//unhighlight: function (element, errorClass, validClass) {
				unhighlight: function (element) {
					$(element).addClass( "is-valid" ).removeClass( "is-invalid" );
				}
				
				} ); // closes validate
		} ); // ends doc ready// JavaScript Document