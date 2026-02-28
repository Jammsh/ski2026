const targetDate = '2026-03-08T08:20:00'; //2026-03-23T00:50:00

function getTimeSegmentElements(segmentElement) { //time-segmnet
	const segmentDisplay = segmentElement.querySelector('.segment-display');
	const segmentDisplayTop = segmentDisplay.querySelector('.segment-display-top');
	const segmentDisplayBottom = segmentDisplay.querySelector('.segment-display-bottom');
	const segmentOverlay = segmentDisplay.querySelector('.segment-overlay');
	const segmentOverlayTop = segmentOverlay.querySelector('.segment-overlay-top');
	const segmentOverlayBottom = segmentOverlay.querySelector('.segment-overlay-bottom');

	return {
		segmentDisplayTop,
		segmentDisplayBottom,
		segmentOverlay,
		segmentOverlayTop,
		segmentOverlayBottom,
	}
}

function updateSegmentValues(displayElement, overlayElement, value) {
	displayElement.textContent = value;
	overlayElement.textContent = value;
}

function updateTimeSegment(segmentElement, timeValue) { //time-segment, 1
	const segmentElements = getTimeSegmentElements(segmentElement);

	if (parseInt(segmentElements.segmentDisplayTop.textContent, 10) === timeValue) {
		return;
	} else

	segmentElements.segmentOverlay.classList.add('flip');

	updateSegmentValues(
		segmentElements.segmentDisplayTop,
		segmentElements.segmentOverlayBottom,
		timeValue
	);

	function finishAnimation() {
		segmentElements.segmentOverlay.classList.remove('flip');
		updateSegmentValues(
			segmentElements.segmentDisplayBottom,
			segmentElements.segmentOverlayTop,
			timeValue
		);

		this.removeEventListener('animationend', finishAnimation);
	}

	segmentElements.segmentOverlay.addEventListener('animationend', finishAnimation);
}

function updateTimeSection(sectionID, timeValue) { //seconds, 14
	const firstNumber = Math.floor(timeValue / 10); // 1
	const secondNumber = timeValue % 10; // 4

	const sectionElement = document.getElementById(sectionID);
	const timeSegments = sectionElement.querySelectorAll('.time-segment');

	updateTimeSegment(timeSegments[0], firstNumber); //time-segmnet, 1
	updateTimeSegment(timeSegments[1], secondNumber);
}

function getTimeRemaining(targetDateTime) {
	const nowTime = Date.now();
	const secondsRemanining = Math.floor((targetDateTime - nowTime) / 1000);

	const complete = nowTime >= targetDateTime;

	if (complete) {
		return {
			complete,
			seconds: 0,
			minutes: 0,
			hours: 0,
			days: 0,
		};
	}

	const days = Math.floor(secondsRemanining / 60 / 60 / 24);
	const hours = Math.floor(secondsRemanining / 60 / 60) - days * 24;
	const minutes = Math.floor(secondsRemanining / 60) % 60;
	const seconds = secondsRemanining % 60;

	return {
		complete,
		seconds,
		minutes,
		hours,
		days
	}
}

function updateAllSegments() {
	const targetTimeStamp = new Date(targetDate).getTime();
	const timeRemainingBits = getTimeRemaining(targetTimeStamp);

	updateTimeSection('seconds', timeRemainingBits.seconds);
	updateTimeSection('minutes', timeRemainingBits.minutes);
	updateTimeSection('hours', timeRemainingBits.hours);
	updateTimeSection('days', timeRemainingBits.days);


return timeRemainingBits.complete;
}

const countdownTimer = setInterval (() => {
	const isComplete = updateAllSegments();
	if (isComplete) {
		clearInterval(countdownTimer);
	}
}, 1000);

updateAllSegments();