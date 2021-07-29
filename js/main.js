// Hamburger Functionality

const hambOverlay = document.querySelector('#hambOverlay'),
	 menuBtn = document.querySelector('.menu_btn');
let menuOpen = false;
let menuOverlay = false;

const headerDiscover = document.querySelector('#header-discover-video'),
		audioBtn = document.querySelector(".audioPlay");

//menu Functionality
function showOverlay() {

	if(!menuOpen, !menuOverlay) {
		hambOverlay.classList.add('visible');
		hambOverlay.classList.remove('closed');
		menuOverlay = true;
		menuBtn.classList.add('open');
		menuOpen = true;
	}
	else {
		hambOverlay.classList.remove('visible');
		hambOverlay.classList.add('closed');
		menuOverlay = false;
		menuBtn.classList.remove('open');
		menuOpen = false;
	}
}

// Header Discover video
function playVideo() {
	headerDiscover.play();
	audioBtn.disabled = false;
	// debugger;
}
function playAudio() {
	if(headerDiscover.muted) {
		headerDiscover.muted = false;
	}
	else{
		headerDiscover.muted = true;
	}

}

playVideo();




menuBtn.addEventListener('click', showOverlay);
headerDiscover.addEventListener('click', playVideo);
audioBtn.addEventListener('click', playAudio);
