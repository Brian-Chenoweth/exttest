// JavaScript Document

jQuery(document).ready(function() {
	
	if (parent.history.length <= 1) {
		$('button.back-btn').hide();
	}
	const height = $('div.hidden-sm').height();
	const footerTop = $('div.new-footer').offset().top;
	if (height > 980) {
		jQuery('div#wrapper').scroll(function () {

			var scrollTop = $('div#wrapper').scrollTop();
			var footer = $('div.new-footer').offset();
				if (scrollTop >= 730 && footer.top >= 1256 ) {
					jQuery('div.sidebar').css({position: "fixed", top: "25%", bottom: ''});
				} 
				else if (footer.top < 1256 && height < 1800) {
					jQuery('div.sidebar').css({position: "relative", top:(footerTop - (1.25 * height)).toString()+"px"});
				}
				else if (footer.top < 1256  && height < 2500) {
					jQuery('div.sidebar').css({position: "relative", top:(footerTop - height).toString()+"px"});
				}
				else if (footer.top < 1256  && height < 3500) {
					jQuery('div.sidebar').css({position: "relative", top:(1.2 * footerTop - height).toString()+"px"});
				}
				else if (footer.top < 1256 && height >= 3500) {
					jQuery('div.sidebar').css({position: "relative", top:'85%'});
				}
				else {
					jQuery('div.sidebar').css({position: "relative", top: "", bottom: ''});
				}			
		});
	} else {
		jQuery('div.sidebar').css({possition: 'relative', top: ''});
	}

});

var goBack = function () {
	parent.history.back();
}

