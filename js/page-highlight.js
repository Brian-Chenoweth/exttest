// JavaScript Document
jQuery(document).ready(function() {
	var titleText = $("title").text().split("|")[0];
	$("ul.nav-right li label").each(function() {
		"use strict";
		
		if ($(this).text().trim() === titleText.trim()) {
			$(this).children('a.tier_1').removeClass("highlight-nav").addClass("highlight-nav");
//			$(this).parent().removeClass("no-background").addClass("no-background");
			$(this).children('i.tier_1_dropdown').click();
			
		} else {
//			console.log($(this).parent().children('ul'));
			$(this).parent().children('ul').children('li').each(function() {
				if($(this).text().trim() === titleText.trim()) {
					$(this).parent().parent().children('label').children('i.tier_1_dropdown').click();
					// $(this).parent().parent().children('label').removeClass("highlight-nav").addClass("highlight-nav");
					$(this).children().removeClass("highlight-nav").addClass("highlight-nav");
//					$(this).parent().removeClass("no-background").addClass("no-background");
				}
				
			})
		}
	});

	$("a.mobile-nav").each(function() {
		"use strict";

		if ($(this).text() + " " === titleText) {
			$(this).removeClass("highlight-nav-mobile").addClass("highlight-nav-mobile");
		}
	});
});