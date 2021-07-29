// Hamburger Functionality

const hambOverlay = document.querySelector('#hambOverlay'),
	 menuBtn = document.querySelector('.menu_btn');
let menuOpen = false;
let menuOverlay = false;

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

menuBtn.addEventListener('click', showOverlay);
