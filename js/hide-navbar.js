// JavaScript Document

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (window.pageYOffset > 100) {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("absNavBar").style.top = "0";
    } else {
      document.getElementById("absNavBar").style.top = "-150px";
	}
    prevScrollpos = currentScrollPos;
  }
  if (window.pageYOffset === 0) {
    document.getElementById("absNavBar").style.top = "0";
  }

}