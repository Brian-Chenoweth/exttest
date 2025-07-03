function openEachTab2(evt, tabName) {
	var i, tabcontent2, tablinks2;
	tabcontent2 = document.getElementsByClassName("tabcontent2");
	for (i = 0; i < tabcontent2.length; i++) {
		tabcontent2[i].style.display = "none";
	}
	tablinks2 = document.getElementsByClassName("tablinks2");
	for (i = 0; i < tablinks2.length; i++) {
		tablinks2[i].className = tablinks2[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen2").click();
