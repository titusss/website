var ideaDia = document.getElementById("dia-03-idea");
var expertDia = document.getElementById("dia-03-expertise");
var capitalDia = document.getElementById("dia-03-capital");

var ideaCard = document.getElementById("card-founder");
var expertCard = document.getElementById("card-agencies");
var capitalCard = document.getElementById("card-investors");

var ideaBox = document.getElementById("box-03-founders");
var expertBox = document.getElementById("box-03-agencies");
var capitalBox = document.getElementById("box-03-investors");

var arrows = document.getElementsByClassName("img-03");

var idea = [ideaDia, ideaBox, ideaCard];
var expert = [expertDia, expertBox, expertCard];
var capital = [capitalDia, capitalBox, capitalCard];

var slideRel = [idea, expert, capital];





for (i = 0; i < 3; i++) {
	slideRel[0][i].onmouseover = function(event) {relFunc(0)};
	slideRel[1][i].onmouseover = function(event) {relFunc(1)};
	slideRel[2][i].onmouseover = function(event) {relFunc(2)};

	slideRel[0][i].onmouseleave = function(event) {relLeave(0)};
	slideRel[1][i].onmouseleave = function(event) {relLeave(1)};
	slideRel[2][i].onmouseleave = function(event) {relLeave(2)};
}

function relFunc(x) {
	for (i = 0; i < 3; i++) {
		arrows[i].style.opacity = "0.2";
		if (i != x) {
			for (j = 0; j < 3; j++) {
				slideRel[i][j].style.opacity = "0.2";
			}
		}
	}
}

async function relLeave(x) {
	for (i = 0; i < 3; i++) {
		arrows[i].style.opacity = "1";
		if (i != x) {
			for (j = 0; j < 3; j++) {
				slideRel[i][j].style.opacity = "1";
			}
		}
	}
}