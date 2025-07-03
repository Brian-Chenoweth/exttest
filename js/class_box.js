// JavaScript Document



$(document).ready(function() {
	  "use strict";
		$(window).resize(function() {
			var windowWidth = $(document).width();
			if(windowWidth < 768) {
				$(".class_box").removeClass("col-9");
				$(".class_box").addClass("col-12");
			}
			else {
				$(".class_box").addClass("col-9");
				$(".class_box").removeClass("col-12");
			}
		})
  		
});