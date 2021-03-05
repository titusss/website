var lines = document.getElementById("line-wrap");
var field = document.getElementById("menu-field");

lines.onclick = function() {
	lines.classList.toggle("active");
	field.classList.toggle("active");
}