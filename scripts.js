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
	// 2. Updating Play Icon
	// 3. Adding Skip Functionality
	// 4. Range Functionality with Volume and Playback Speed
	// 5. Progress Bar
	// 6. Progree Bar with Scrub


// Event Handlers