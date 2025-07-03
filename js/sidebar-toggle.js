// JavaScript Document

$(document).ready(function () {
	if (matchMedia) {
		var mq = window.matchMedia("(max-width: 991px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}

	function WidthChange(mq) {
		if (mq.matches) {
			$("#sidebar-toggle").removeClass("show");
		}
	}
	});

$(document).ready(function () {
	if (matchMedia) {
		var mq = window.matchMedia("(min-width: 991px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}

	function WidthChange(mq) {
		if (mq.matches) {
			$("#sidebar-toggle").addClass("show");
		}
	}
	});

$(".in-this-section").click(function(){
	$(".in-this-section").toggleClass("bg-cpgreen");
	$(".in-this-section").toggleClass("text-white");
	});