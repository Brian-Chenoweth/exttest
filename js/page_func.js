// JavaScript Document
/**********************Sticky menu when scrolled**********/
$(document).scroll(function() {
  var y = $(document).scrollTop();

  if (y >= 70) {
    $(".box_navbar_icon").addClass("box_fixed");
  } else {
    $(".box_navbar_icon").removeClass("box_fixed");
  }
});

/****************************SIDE NAV FUNCTIONS*/
$(".tier_1").click(function(e) {
  $(this).toggleClass("tier_1_clicked");
  $(".tier_1")
    .not(this)
    .removeClass("tier_1_clicked");
});

$("#sideNav").click(function(e) {
  if ($(".tier_1").hasClass("tier_1_clicked")) {
    console.log("hello");
    $(".tier_1").removeClass("tier_1_clicked");
    console.log(
      $(".tier_1")
        .parent()
        .children("ul.tree")
    );
  }
});

/*TOGGLER WITHIN TREE MENU */
$(document).ready(function() {
  $("label.tree-toggler").click(function() {
    $(this)
      .parent()
      .children("ul.tree")
      .toggle(200);
    $("label.tree-toggler")
      .not(this)
      .parent()
      .children("ul.tree")
      .hide(200);
	$("label.tree-toggler").not(this).map(function() {
		if ($(this).find("i").hasClass("fa-angle-down")) {
			$(this).find("i").toggleClass("fa-angle-down fa-angle-right");
			$(this).toggleClass("tier_1_clicked");
		}
	})
  });
});

$("label.tree-toggler")
  .parent()
  .children("ul.tree")
  .toggle(0);

/********************************** Side Nav animation function */
var main = function() {
  /* Push the body and the nav over by 400px over */
  $("#sidemenu").click(function() {
    $(".nav-side").animate({
      right: "0px"
    });

    $("body").animate({
      right: "400px"
    });
    $("#overlay").fadeIn(500);
    $("body").addClass("noscroll");
  });

  /* Then push them back */
  $(".closebtn").click(function() {
    $(".nav-side").animate({
      right: "-400px"
    });
    $("body").animate({
      right: "0px"
    });
    $("#overlay").fadeOut(500);
    $("label.tree-toggler")
      .parent()
      .children("ul.tree")
      .hide(200);
    $(".tier_1").removeClass("tier_1_clicked");
    $("body").removeClass("noscroll");
  });

  $("#overlay").click(function() {
    $(".nav-side").animate({
      right: "-100%"
    });
    $("body").animate({
      right: "0px"
    });
    $("#overlay").fadeOut(500);
    $("label.tree-toggler")
      .parent()
      .children("ul.tree")
      .hide(200);
    $(".tier_1").removeClass("tier_1_clicked");
    $("body").removeClass("noscroll");
  });

  /******************************** for button when scrolled down*/
  $("#sidemenu_2").click(function() {
    $(".nav-side").animate({
      right: "0px"
    });

    $("body").animate({
      right: "100%"
    });
    $("#overlay").fadeIn(500);
    $("body").addClass("noscroll");
  });

  /* Then push them back */
  $(".closebtn").click(function() {
    $(".nav-side").animate({
      right: "-100%"
    });
    $("body").animate({
      right: "0px"
    });
    $("#overlay").fadeOut(500);
    $("label.tree-toggler")
      .parent()
      .children("ul.tree")
      .hide(200);
    $(".tier_1").removeClass("tier_1_clicked");
    $("body").removeClass("noscroll");
	$("label.tree-toggler").map(function() {
      if (
        $(this)
          .find("i")
          .hasClass("fa-angle-down")
      ) {
        $(this)
          .find("i")
          .toggleClass("fa-angle-right fa-angle-down");
		$(this).toggleClass("tier_1_clicked");
      }
    });
  });

  $("#overlay").click(function() {
    $(".nav-side").animate({
      right: "-100%"
    });
    $("body").animate({
      right: "0px"
    });
    $("#overlay").fadeOut(500);
    $("label.tree-toggler")
      .parent()
      .children("ul.tree")
      .hide(200);
    $(".tier_1").removeClass("tier_1_clicked");
    $("body").removeClass("noscroll");
  });
};

$(document).ready(main);

/**********************************************END OF SIDE NAV*****/
