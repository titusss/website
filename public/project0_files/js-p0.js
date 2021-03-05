var abstractButton = document.getElementById("abstractButton");
var portraitButton = document.getElementById("portraitButton");
var previewImg = document.getElementById("p6-img");

var carouselParent = document.getElementById("carousel");
var carouselChild = document.getElementById("band-wrapper");
var bandLeft = document.getElementById("band-left");
var bandRight = document.getElementById("band-right");

var clickCount = 0;

var moveAmount = 0;

var carouselImg = [document.getElementById("img-0"),document.getElementById("img-1"),document.getElementById("img-2"),document.getElementById("img-3"),document.getElementById("img-4")];





abstractButton.onclick = function() {
	portraitButton.style.color = "#E3E3E3";
	abstractButton.style.color = "#000000";
	previewImg.src = "project0_files/pba-img07.jpg";
}

portraitButton.onclick = function() {
	portraitButton.style.color = "#000000";
	abstractButton.style.color = "#E3E3E3";
	previewImg.src = "images/pba-img08.jpg";
}


bandRight.onclick = function() {moveRight()};
bandLeft.onclick = function() {moveLeft()};
window.onload = function() {startUp()};
/*
for (i = 0; i < carouselImg.length; i++) {
		if (i % 2 === 0) {
			carouselImg.splice(i, 1); 
		}
}
*/


function moveRight() {
	if (clickCount + 1 < 5) {
		clickCount = clickCount + 1;
		/*carouselChild.style.left = (((carouselImg[clickCount].getBoundingClientRect().left)+(carouselImg[clickCount].width/2))*-1)+"px";*/
		carouselChild.style.left = (moveAmount*clickCount)*-1+"px";
	}
}


function moveLeft() {
	if (clickCount -1 >= 0) {
		clickCount = clickCount -1;
		/*carouselChild.style.left = (((carouselImg[clickCount].getBoundingClientRect().left)+(carouselImg[clickCount].width/2))*-1)+"px";*/
		/*carouselChild.style.left = moveAmount*-1+"px2";*/
		carouselChild.style.left = (moveAmount*clickCount)*-1+"px";
	}
}

function startUp() {
	carouselChild.style.left = 0;
	moveAmount = (carouselImg[2].getBoundingClientRect().left-carouselImg[1].getBoundingClientRect().left)-(carouselImg[1].style.width/2);
}




var seconds = 0;
var videoMeth = document.getElementById("video-04");
var method = [document.getElementById("method-01"), document.getElementById("method-02"), document.getElementById("method-03")];
var cancel = 0;


videoMeth.addEventListener("playing", function()  {
	seconds = 0;
})

function incrementSeconds() {
    seconds += 1;
    var videoTime = Math.round(videoMeth.currentTime);
	if (videoTime == 1) {
		method[1].style.opacity = 0.2;
		method[2].style.opacity = 0.2;
		method[0].style.opacity = 1;
	}
	if (videoTime == 6) {
		method[0].style.opacity = 0.2;
		method[2].style.opacity = 0.2;
		method[1].style.opacity = 1;
	}
	if (videoTime == 18) {
		method[0].style.opacity = 0.2;
		method[1].style.opacity = 0.2;
		method[2].style.opacity = 1;
	}
}

var cancel = setInterval(incrementSeconds, 1000);



