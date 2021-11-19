var video = document.getElementById("video-gallery-01");

var videoTitle = document.getElementById("quote");
var opacity;
var videoTitlePos = videoTitle.getBoundingClientRect().top;
var lines = document.getElementById("linesParent");
var linesTop = lines.getBoundingClientRect().top;
var sections = []
var linesFadedIn = false;

for(i=3	;i<document.getElementById("p-w").childNodes.length;i++) {
	sections.push(document.getElementById("p-w").childNodes[i]);
	i++;
}

function initializeVideoVisibility() {
	if(videoTitlePos<0) {
		video.style.display="none";
	}
	else {
		video.style.display="block";
	}
}

initializeVideoVisibility();

window.onscroll = function() {
	
	var videoTitlePos = videoTitle.getBoundingClientRect().top;
	var linesTop = lines.getBoundingClientRect().top;
	//normalizeScroll(videoTitlePos.bottom);
	//video.style.filter="brightness("+opacity/100+")";
	if(videoTitlePos<0) {
		video.style.display="none";
	}
	else {
		video.style.display="block";
	}
	if(sections.length>0) {
		for(i=0;i<sections.length;i++) {
			fadeIn(sections[i]);
		}
	}
	
	//console.log(window.innerHeight);
	if(linesFadedIn==false && linesTop<=window.innerHeight) {
		document.getElementById("linesImage").classList.add("clippedIn");
		linesFadedIn=true;
	}
}

function fadeIn(sectionBlock) {
	var boundarySectionBlock = sectionBlock.getBoundingClientRect().top;
	if(boundarySectionBlock <= window.innerHeight) {
		sectionBlock.classList.remove("fade");
		sections.splice(i,1);
	}
}

