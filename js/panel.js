var rttCaption = $('#rotator-caption');
var mainCarousel = $('#ftNews');
var firstRotator = $('#ftNews .carousel-item:first-child');
var introDiv = $("#intro");
var rBoxDesign = $("#rightBoxDesign");
var lBoxDesign = $("#leftBoxDesign");
var newRsrc = $(".effect");
var cpCarousel = $(".carousel-inner");
var carouselBox = $("#carouselBox");


rttCaption.addClass('active');
rttCaption.html(firstRotator.find('.carousel-caption').html());

$(function() {
	var staticImgHeight = $('#welcomeGraphic').height();
	var newRsrcHgt = newRsrc.height();
	var cpHgt = cpCarousel.height();
	$("#intro").css( "margin-top", staticImgHeight-10);
	$("#pageIntro").css( "margin-top", staticImgHeight-10);
	rBoxDesign.css({height : newRsrcHgt});
	lBoxDesign.css({height : newRsrcHgt});
	carouselBox.css({height : (cpHgt)});
	
	$(window).on("resize", function() {
		staticImgHeight = $('#welcomeGraphic').height();
		newRsrcHgt = newRsrc.height();
		cpHgt = cpCarousel.height();
		$("#intro").css( "margin-top", staticImgHeight-50);
		//$("#pageIntroOld").css( "margin-top", staticImgHeight-50);
		rBoxDesign.css({height : newRsrcHgt});
		lBoxDesign.css({height : newRsrcHgt});
		carouselBox.css({height : (cpHgt)});
	}).trigger("resize");
});

var rotator_init = function() {
	mainCarousel.on('slide.bs.carousel', function(e) {
		rttCaption.fadeOut(function() {
			rttCaption.html(
				$(e.relatedTarget).find('.carousel-caption').html()
			);
			rttCaption.fadeIn();
		});
	});
};



$(function() {
	rotator_init();
});