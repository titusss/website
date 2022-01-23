var textListLine1 = ["Autonomous robots that","Tangible interfaces for","Computers dreaming up","Raster to CNC algorithms","Systems for radically new","Award winning","UI’s for next-gen","Backpack-chair-bed","Guides to protect against","Digital classrooms for the"];
var textListLine2 = ["paint AI generated art","climate change data","novel artworks","for industrial robots","ways of work","short films","automobiles","hybrids for homeless","digital surveillance","school of the future"];


const styleGreenhouseExtendedWrapper = getComputedStyle(document.querySelector('.e-w-last'));

var projectParent = document.getElementById("project-parent");
var extendedGreenhouse = document.getElementById("e-studio");

var projects = document.getElementById("project-parent").childNodes;
var projectsList = [];

var extWidth = window.getComputedStyle(document.getElementById("e-g-artificial"), null);
var videoGallery01 = document.getElementById("video-gallery-01");

//videoGallery01.style.width = extWidth.getPropertyValue("width");
//videoGallery01.style.height = parseInt(extWidth.getPropertyValue("width"))/2+"px";

var shuffleLine0 = document.getElementById("line0-0");
var shuffleLine1 = document.getElementById("line0-1");
var linkToProjects = document.getElementById("l-t-p-wrapper");
var svgLinkToProjects = document.getElementById("l-t-p-svg");

linkToProjects.onmouseover = function() {
	svgLinkToProjects.classList.add("l-t-p-svg-hover");
}

linkToProjects.onmouseout = function() {
	svgLinkToProjects.classList.remove("l-t-p-svg-hover");
}

var animationCount = 0;
shuffleLine1.addEventListener("animationiteration",function() {
	shuffleLine0.innerHTML = textListLine1[animationCount];
	shuffleLine1.innerHTML = textListLine2[animationCount];
	if (event.animationName=="shuffleAnimation") {
		if (animationCount < textListLine1.length-1) {
			animationCount++;
		}
		else {
			animationCount=0;
		}
	}

	
});

function loadInfo() {
	var introSpans = [document.getElementById("i-b-i-0"),document.getElementById("i-b-i-1"),document.getElementById("i-b-i-2"),document.getElementById("i-b-i-3"),document.getElementById("i-b-i-4")];
	for(i=0;i<introSpans.length;i++) {
		introSpans[i].classList.add("introVisible");
	}
}

loadInfo();

for (i=1; i < projects.length-1; i++) {
	projectsList.push(projects[i]);
	i++;
}

for (i=0;i<projectsList.length;i++) {
	projectsList[i].childNodes[3].style.transform = "translate(0px, -"+projectsList[i].childNodes[3].offsetHeight+"px)";
}


var arrowTextSum = document.getElementById("sum-text");
var arrowTextView = document.getElementById("v-p-text");

var viewGreenhouse = document.getElementById("v-p-studio");
var sumGreenhouse = document.getElementById("sum-studio");

var toggleGreenhouse = false;

extendedGreenhouse.style.transform = "translate(0px, -"+styleGreenhouseExtendedWrapper.height+")";


var viewProjects = [document.getElementById("v-p-artificial"), document.getElementById("v-p-supervisor"), document.getElementById("v-p-micromix"), document.getElementById("v-p-mdmadbm"), document.getElementById("v-p-tinad"), document.getElementById("v-p-studio")];
var viewProjectTexts = [document.getElementById("v-p-text-artificial"), document.getElementById("v-p-text-supervisor"), document.getElementById("v-p-text-micromix"), document.getElementById("v-p-text-mdmadbm"), document.getElementById("v-p-text-tinad"), document.getElementById("v-p-text-studio")];

var summaryTexts = [document.getElementById("sum-text-artificial"), document.getElementById("sum-text-supervisor"), document.getElementById("sum-text-micromix"), document.getElementById("sum-text-mdmadbm"), document.getElementById("sum-text-tinad"), document.getElementById("sum-text-studio")];
var summaries = [document.getElementById("sum-artificial"), document.getElementById("sum-supervisor"), document.getElementById("sum-micromix"), document.getElementById("sum-mdmadbm"), document.getElementById("sum-tinad"), document.getElementById("sum-studio")];
var arrows = [document.getElementById("sum-arrow-artificial"), document.getElementById("sum-arrow-supervisor"), document.getElementById("sum-arrow-micromix"), document.getElementById("sum-arrow-mdmadbm"), document.getElementById("sum-arrow-tinad"), document.getElementById("sum-arrow-studio")];

var extensionProject = [document.getElementById("e-artificial"), document.getElementById("e-supervisor"), document.getElementById("e-micromix"), document.getElementById("e-mdmadbm"), document.getElementById("e-tinad"), document.getElementById("e-studio")];
var closeSummaryButton = [document.getElementById("ext-close-artificial"), document.getElementById("ext-close-supervisor"), document.getElementById("ext-close-micromix"), document.getElementById("ext-close-mdmadbm"), document.getElementById("ext-close-tinad"), document.getElementById("ext-close-studio")];

//
// Summary
//

// Set behaviour of summary arrow and text on mouse hover
// console.log(summaries)
for (i=0; i < summaries.length; i++) {
	summariesOver(summaries[i], arrows[i], summaryTexts[i]);
	summariesOut(summaries[i], arrows[i], summaryTexts[i]);
	summariesDown(summaries[i], extensionProject[i], arrows[i], projectsList[i], closeSummaryButton[i]);
	extensionProject[i].style.transform = "translate(0px, -"+getComputedStyle(extensionProject[i]).height+")"; // Collapse all summaries to default position
}

// Extend summary on mouse click
function summariesDown(summary, extensionProject, arrowProject, project, closeSummaryButton) {
	summary.onmousedown = function() {
		if ((typeof openedSummary==="undefined") || (openedSummary!==summary)) {
			openSummary(extensionProject, arrowProject, project);
			openedSummary = summary;
		}
		else {
			closeSummary(extensionProject, arrowProject, project);
			openedSummary = null;
		}
	}
	closeSummaryButton.onmousedown = function() {
		closeSummary(extensionProject, arrowProject, project);
		openedSummary = null;
	}
}

function openSummary(extensionProject, arrowProject, project) {
	for (i=0;i<projectsList.length;i++) {
		if ((projectsList[i].childNodes[3]!==extensionProject) && (arrows[i]!==arrowProject) && (projectsList[i]!==project)) {
			closeSummary(projectsList[i].childNodes[3], arrows[i], projectsList[i]);
		}
	}
	projectParent.style.overflow = "auto";
	extensionProject.style.transform = "translate(0px, 0px)";
	extensionProject.classList.add("extVisible");
	arrowProject.classList.remove("down");
	arrowProject.classList.remove("right");
	arrowProject.classList.add("up");
	// Move all projects away, except the one you selected the summary of
	moveOtherProjects(project);
	//extensionProject.scrollIntoView(false);
	
	//window.scrollTo(0, project.getBoundingClientRect().bottom+window.pageYOffset-200);

}

function closeSummary(extensionProject, arrowProject, project) {
	extensionProject.style.transform = "translate(0px, -"+getComputedStyle(extensionProject).height+")";
	extensionProject.classList.remove("extVisible");
	arrowProject.classList.remove("up");
	arrowProject.classList.add("right");
	
	for (j=0;j<projectsList.length;j++) {
		projectsList[j].style.transform = "translate(0px, 0px)";
	}
}

function moveOtherProjects(project) {
	
	for (k=0;k<projectsList.length;k++) {
		if ((projectsList[k]!==project) && (projectsList.indexOf(projectsList[k])>projectsList.indexOf(project))) {
			
			projectsList[k].style.transform = "translate(0px, "+project.childNodes[3].offsetHeight+"px)";
		}
	}
}

// Define mouse over summary
function summariesOver(summary, arrow, summaryText) {
	summary.onmouseover = function() {
		if ((typeof openedSummary==="undefined") || (openedSummary!==summary)) {
			arrow.classList.add("down");
		}
		summaryText.style.transform = "translate(3px, 0px)";
	}
}

// Define mouse out of summary
function summariesOut(summary, arrow, summaryText) {
	summary.onmouseout = function() {
		if ((typeof openedSummary==="undefined") || (openedSummary!==summary)) {
		
			arrow.classList.remove("down");
			arrow.classList.add("right");
		}
		summaryText.style.transform = "translate(0px, 0px)";
	}
}

//
// End of summary
//


//
// View project
//

// Set behaviour of view project arrow and text on mouse hover
for (i=0; i < viewProjects.length; i++) {
	viewProjectsOver(viewProjects[i], viewProjectTexts[i]);
	viewProjectsOut(viewProjects[i], viewProjectTexts[i]);
}

// Define mouse over view project
function viewProjectsOver(viewProject, viewProjectText) {
	viewProject.onmouseover = function() {
		viewProjectText.style.transform = "translate(3px, 0px)";
	}
}

// Define mouse out of view project
function viewProjectsOut(viewProject, viewProjectText) {
	viewProject.onmouseout = function() {
		viewProjectText.style.transform = "translate(0px, 0px)";
	}
}

//
// End of view project
//

var projectArtificial = document.getElementById("p-l-artificial");
var projectTitleArtificial = document.getElementById("h-artificial");

projectArtificial.onmouseover = function() {
	projectTitleArtificial.classList.add("moveHover");
}

projectArtificial.onmouseout = function() {
	projectTitleArtificial.classList.remove("moveHover");
}

var projectMdmadbm = document.getElementById("project-titles-mdmadbm");
var projectFigureMdmadbm = document.getElementById("p-fig-mdmadbm");

projectMdmadbm.onmouseover = function() {
	projectFigureMdmadbm.classList.add("frameHover");
}

projectMdmadbm.onmouseout = function() {
	projectFigureMdmadbm.classList.remove("frameHover");
}

var projectTinad = document.getElementById("h-tinad");
var projectFigureTinad = document.getElementById("p-fig-tinad");

projectTinad.onmouseover = function() {
	projectFigureTinad.classList.add("frameHover");
}

projectTinad.onmouseout = function() {
	projectFigureTinad.classList.remove("frameHover");
}

var projectGreenhouse = document.getElementById("h-studio");
var projectFigureGreenhouse = document.getElementById("p-fig-studio");

projectGreenhouse.onmouseover = function() {
	projectFigureGreenhouse.classList.add("frameHover");
}

projectGreenhouse.onmouseout = function() {
	projectFigureGreenhouse.classList.remove("frameHover");
}

var projectSupervisor = document.getElementById("h-supervisor");
var projectFigureSupervisor = document.getElementById("p-fig-supervisor");

projectSupervisor.onmouseover = function() {
	projectFigureSupervisor.classList.add("frameHover");
}

projectSupervisor.onmouseout = function() {
	projectFigureSupervisor.classList.remove("frameHover");
}

var projectMicromix = document.getElementById("h-micromix");
var projectFigureMicromix = document.getElementById("p-fig-micromix");

projectMicromix.onmouseover = function() {
	projectFigureMicromix.classList.add("frameHover");
}

projectMicromix.onmouseout = function() {
	projectFigureMicromix.classList.remove("frameHover");
}