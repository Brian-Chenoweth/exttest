// JavaScript Document



$(document).ready(function() {
	  "use strict";
		$(window).resize(function() {
			var windowWidth = $(document).width();
			if(windowWidth < 1000 && windowWidth > 769) {
				$(".class_box_3col").removeClass("col-3");
				$(".class_box_8col").removeClass("col-8");
				$(".class_box_3col").addClass("col-4");
				$(".class_box_8col").addClass("col-7");
			} 
			else if(windowWidth < 768) {
				$(".class_box_3col").removeClass("col-4");
				$(".class_box_8col").removeClass("col-7");
				$(".class_box_3col").removeClass("col-3");
				$(".class_box_8col").removeClass("col-8");
				$(".class_box_3col").addClass("col-12");
				$(".class_box_8col").addClass("col-12");
				$(".class_box_8col").removeClass("margin-left");
			}
			else {
				$(".class_box_3col").addClass("col-3");
				$(".class_box_8col").addClass("col-8");
				$(".class_box_3col").removeClass("col-12");
				$(".class_box_8col").removeClass("col-12");
				$(".class_box_3col").removeClass("col-4");
				$(".class_box_8col").removeClass("col-3");
				$(".class_box_8col").addClass("margin-left");
			}
		});
  		
});