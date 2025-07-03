$(document).ready(function(){ 
	var timer;
	jQuery('div#wrapper').scroll(function () {
        if ($(this).scrollTop() > 100) { 
            $('#btt-btn').fadeIn(); 
        } else { 
            $('#btt-btn').fadeOut(); 
        } 
		if(timer) {
			window.clearTimeout(timer);
		}

		timer = window.setTimeout(function() {
			// actual callback
			$('#btt-btn').fadeOut();
		}, 1500);
    }); 
    $('#btt-btn').click(function(){ 
        $("div#wrapper, body").animate({ scrollTop: 0 }, 600);

    }); 
});