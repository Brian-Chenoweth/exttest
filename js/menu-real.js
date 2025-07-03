$(document).ready($(function() {
  var collapsedMenu = $(".collapsedContent");
  $(".collapseMenu").click(function() {
    collapsedMenu.toggleClass("open");
  });
})
);

$(function() {
	document.getElementById('copyright').innerHTML = '&copy; ' + new Date().getFullYear() + ' California Polytechnic State University';
})


//$(document).ready($(function() {
//	var prevScrollpos = window.pageYOffset;
//	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent) == false) {
//		jQuery(window).scroll(function() {
//			if (jQuery(window).scrollTop() > 150) {
//				$(".header-bar").addClass("shaded");
//			} else {
//				$(".header-bar").removeClass("shaded");
//			}
//		})
//	} else {
//		window.onscroll = function() {
//			var currentScrollPos = window.pageYOffset;
//			if (window.pageYOffset > 100) {
//				if (prevScrollpos > currentScrollPos) {
//					document.getElementById("absNavBar").style.top = "0";
//				} else {
//					document.getElementById("absNavBar").style.top = "-150px";
//				}
//				prevScrollpos = currentScrollPos;
//			}
//		}
//	}
//}))


var bigMenu = function() {
  $("#bigNav").click(function() {
    $(".bigDrop").toggleClass("menuOpen");
    $(".topNavItem").toggleClass("dissipate");
    $(".closer").toggleClass("activate");
    return false;
  });

  $(".closer").click(function() {
    $(".bigDrop").toggleClass("menuOpen");
    $(".topNavItem").toggleClass("dissipate");
    $(".closer").toggleClass("activate");
//	$(".header-bar").removeClass("shaded");
//    $("label.tree-toggler")
//      .parent()
//      .children("ul.tree")
//      .hide(200);

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
};

$(function() {
  $(window)
    .on("resize", function() {
      var navHeight = $("#absNavBar").height();
      var wdwWidth = $(window).width();
      $("#bigMenu").css("margin-top", navHeight);
      if (wdwWidth <= 768) {
        if ($(".bigDrop").hasClass("menuOpen")) {
          $(".bigDrop").removeClass("menuOpen");
          $(".topNavItem").removeClass("dissipate", 5000);
          $(".closer").removeClass("activate");
        }
      }
    })
    .trigger("resize");
});

$(".top_nav")
  .unbind()
  .click(function() {
    $(this)
      .find("i")
      .toggleClass("fa-angle-right fa-angle-down");
	$(this).toggleClass("tier_1_clicked");
  });


$(document).ready((function() {
  bigMenu();
}));

