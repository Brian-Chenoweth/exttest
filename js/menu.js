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

var bigMenu = function() {
  $("#bigNav").click(function() {
    $(".bigDrop").toggleClass("menuOpen");
    $(".topNavItem").toggleClass("dissipate", 5000);
    $(".closer").toggleClass("activate");
    return false;
  });

  $(".closer").click(function() {
    $(".bigDrop").toggleClass("menuOpen");
    $(".topNavItem").toggleClass("dissipate", 5000);
    $(".closer").toggleClass("activate");
    $("label.tree-toggler")
      .parent()
      .children("ul.tree")
      .hide(200);

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
      navHeight = $("#absNavBar").height();
      wdwWidth = $(window).width();
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

$(".tier_1")
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
