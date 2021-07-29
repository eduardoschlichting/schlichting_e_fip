(() => {
	const hambOverlay = document.querySelector('#hambOverlay'),
		 menuBtn = document.querySelector('.menu_btn'),
		 headerDiscover = document.querySelector('#header-discover-video'),
		 audioBtn = document.querySelector(".audioPlay"),
		 textHeaders = document.querySelectorAll('.clicker');

	let menuOpen = false,
		menuOverlay = false,
		logoNavColor = document.querySelector('#logoNavColor'),
		logoNavWhite = document.querySelector('#logoNavWhite');


	const tideInfo = [
		`Washing on cold water is better for the environment because it saves energy by not using heat. For cold loads, simply use half a cup of Tide Cold for each 10kg of laundry.`,

		`When using on hot water, be careful with the type of clothes that are to be washed. Some pieces might shrink when washed and dried on hot. For hot loads, simply use half a cup of Tide Hot for each 10kg of laundry.`,

		`When washing a high quantity of clothes,  you may opt to use Tide High Efficiency to reduce time and detergent waste. For High Efficiency, use 1/3 cup of Tide High Efficiency on each load.`
	]

	//menu Functionality
	function showOverlay() {

		if(!menuOpen, !menuOverlay) {
			hambOverlay.classList.add('visible');
			hambOverlay.classList.remove('closed');
			menuOverlay = true;
			menuBtn.classList.add('open');
			menuOpen = true;
			logoNavColor.src = `images/logo-nav-white.svg`;
		}
		else {
			hambOverlay.classList.remove('visible');
			hambOverlay.classList.add('closed');
			menuOverlay = false;
			menuBtn.classList.remove('open');
			menuOpen = false;
			logoNavColor.src = `images/logo-nav-color.svg`;
			logoNavWhite.src = `images/logo-nav-white.svg`;
		}
	}

	// Header Discover video
	function playVideo() {
		headerDiscover.play();
		audioBtn.disabled = false;
	}
	function playAudio() {
		if(headerDiscover.muted) {
			headerDiscover.muted = false;
			audioBtn.textContent = 'Turn off Audio';
		}
		else{
			headerDiscover.muted = true;
			audioBtn.textContent = 'Play Audio';
		}

	}

	if(headerDiscover) {
		playVideo();
	}

	// Info Select

	function showInfo() {
			this.nextElementSibling.textContent = tideInfo[this.dataset.info];
			// this.parent will get the parent element
			// this.parent.classList.......
 	}

	menuBtn.addEventListener('click', showOverlay);

	if(headerDiscover) {
		headerDiscover.addEventListener('click', playVideo);
		audioBtn.addEventListener('click', playAudio);
	}

	textHeaders.forEach(header => header.addEventListener('click', showInfo));

})();
