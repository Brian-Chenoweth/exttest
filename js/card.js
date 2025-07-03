// JavaScript Document
//var id = document.getElementById;

$('.expander').unbind().click(function() {
	
var id = $(this). attr('id');
	
	if (!$(this).parent().hasClass("expanded")) {
		$(this).parent().addClass("expanded");
		var that = $(this);
		$(this).fadeOut(100, function() {
			that.html("Less about "+id);
		});
		$(this).fadeIn();
	}
	else if ($(this).parent().hasClass("expanded")) {
		var parent = $(this).parent();
		setTimeout(function() {
            parent.removeClass("expanded");
        }, 200);
        var then = $(this);
		$(this).fadeOut(100, function () {
			then.html("More about "+id);
			
		});
		$(this).fadeIn();
	}
});