var h, i;
var expanders = document.getElementsByClassName("expander_bar");

for (i = 0; i < expanders.length; i++)
	expanders[i].dataset.state = "goodbye";

$(".expander_bar").click(function(event){
	event.preventDefault();
	
	if (this.dataset.state == "goodbye") {
		$(this).parent().find(".triangle").addClass("text_rotate");
		
		$(this).parent().find(".expander_content").css("height", "auto");
		h = $(this).parent().find(".expander_content").height();
		$(this).parent().find(".expander_content").css("height", 0);
		$(this).parent().find(".expander_content").animate({height:h},{duration:1000,queue:false});
		this.dataset.state = "hello";
	}
	
	else {
		$(this).parent().find(".triangle").removeClass("text_rotate");
		$(this).parent().find(".expander_content").animate({height:0},1000);
		this.dataset.state = "goodbye";
	}
	
});