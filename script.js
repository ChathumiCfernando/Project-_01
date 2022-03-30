// main page

function playGamerVideo() {
	var video = document.getElementById("gamersbg");
	video.play();
}

function pauseGamerVideo() {
	var video = document.getElementById("gamersbg");
	video.pause();
}

function playDeveloperVideo() {
	var video = document.getElementById("developersbg");
	video.play();
	video.playbackRate = 3;
}

function pauseDeveloperVideo() {
	var video = document.getElementById("developersbg");
	video.pause();
}

// main page