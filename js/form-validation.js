// JavaScript Document
// Wait for the DOM to be ready
// Adds pattern validation method, which tests the regular expression that's passed in.
$.validator.addMethod("pattern", function(value, element, param) {
    if (this.optional(element)) {
        return true;
    }
    if (typeof param === "string") {
        param = new RegExp("^(?:" + param + ")$");
    }
    return param.test(value);
}, "");
// Initialize form validation on the registration form.
// It has the name attribute "registration"
$("#cform").validate({
    // Disables automatic validation. Can change with these options if necessary.
    onkeyup: false,
    onfocusout: false,
    onclick: false,
    // Ignores comments section when validating.
    ignore: ".ignore-validate",
    // Specify validation rules
    rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        myname: {
            required: false,
            pattern: /[A-Za-z] [A-Za-z]/
        },
        email: {
            required: false,
            pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        },
        message: {
            required: false
        }
    },
    // Specify validation error messages
    messages: {
        myname: {
            required: "This is a required field!",
            pattern: "Format: First Last"
        },
        email: {
            required: "This is a required field!",
            pattern: "Please enter a valid email address!"
        },
        message: {
            required: "This is a required field!"
        }
    },
    // Specify that messages should be placed after the input label.
    //	errorPlacement: function(error, element) {
    //		$("label[for='" + element.attr("id") + "']").after(error);
    //	},
    // Custom error showing handler. Just adds icon after the input label.
    showErrors(errorMap, errorList) {
        this.defaultShowErrors();
        errorList.forEach(function(error) {
            var label_var = "label[for='" + error.element.id + "'].error";
            $(label_var).removeClass("display-none");
            // Adds error icon after the input label. Has conditional because showErrors
            // is called on every incorrect submit and will add an icon every time if this 
            // isn't here.
            if ($("#icon_for_" + error.element.id).length === 0) {
                $(label_var).before("<i class='far fa-times-circle fa-sm' id='icon_for_" + error.element.id + "'></i>");
            }
        })
    },
    // Custom success handler. Removes label and its icon upon success of a field.
    success: function(label) {
        // Chose to add class instead of using .css("display", "none") because
        // it doesn't set the style properly. 

        label.addClass("display-none");
        $("#icon_for_" + label.attr("for")).remove();
    },
    // On successful form submit, makes a post request to processcontact.php, which
    // will send the emails.
    
	submitHandler: function() {
        var postData = $('#cform').serialize();
        $.post('processcontact.php', postData + '&action=submit&ajaxrequest=1', function(msg) {
            if (msg) {
                $('#cform').before(msg);
            }
        });
		
    }
});