// Grab elements
	const player = document.querySelector('.player');
	const video = player.querySelector('.viewer');
	const progress = player.querySelector('.progress');
	const progressBar = player.querySelector('.progress__filled');
	const toggle = player.querySelector('.toggle');
	const skipButtons = player.querySelectorAll('[data-skip]');
	const ranges = player.querySelectorAll('.player__slider');

// Build Functions
	// 1. Intializing Play Function
		function togglePlay(){
			// if(video.paused){
			// 	video.play();
			// } else {
			// 	video.pause();
			// }

			// conditional ternary method
			const method = video.paused ? 'play' : 'pause';
			video[method]();
		}
	// 2. Updating Play Icon
		function updateIcon(){
			// if video is paused then change the icon to play else pause icon
			const icon = video.paused ? '►' : '❚ ❚';
			// change toggle icon to whatever icon is set to.
			toggle.textContent = icon; //******** Review Later
			// console.log(icon);
		}
	// 3. Adding Skip Functionality
		function skip(){
			// want to grab data-skip value to determine how much we skip
			const amountToSkip = this.dataset.skip
			// console.log(amountToSkip);
			// the video's current time plus the amount that we want to skip
			video.currentTime += parseFloat(amountToSkip);
		}
	// 4. Range Functionality with Volume and Playback Speed
		function handleRange(){
			// console.log(this);
			// console.log(this.value);
			video[this.name] = this.value; //******** Review Later
		}

	// 5. Progress Bar
		function handleProgress(){
			// need to determine the percentage of the video that is played compared to duration
			const percentage = (video.currentTime / video.duration) * 100;//******** Review Later
			// console.log(percentage);
			// updates progress bar to be the percentage relative to the percentage playing.
			// console.log(progressBar.style.flexBasis;
			progressBar.style.flexBasis = `${percentage}%`; //******** Review Later
		}
	// 6. Progress Bar with Scrub
		let mousedown = false;
		function scrub(e){
			// grabs width of progressbar over total progress bar width to the video duration 
			// console.log(e)
			const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
			video.currentTime = scrubTime;
		}


// Event Handlers
	// Play during click
	video.addEventListener('click', togglePlay);
	// update icon
	video.addEventListener('click', updateIcon);
	video.addEventListener('timeupdate', handleProgress);

	// play on icon click
	toggle.addEventListener('click', togglePlay);
	// update icon
	toggle.addEventListener('click', updateIcon);


	skipButtons.forEach(button => button.addEventListener('click', skip));

	// event handlers for range changes;
	ranges.forEach(range => range.addEventListener('click', handleRange));
	ranges.forEach(range => range.addEventListener('mousemove', handleRange));

	progress.addEventListener('click', scrub);
	progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
	progress.addEventListener('mousedown', () => mousedown = true);
	progress.addEventListener('mouseup', () => mousedown = false)

