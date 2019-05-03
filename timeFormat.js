//take a number of seconds and turn it into the format HH:MM:SS

let seconds = 3566;

function timeFormat(inputSeconds) {
	let hours = Math.floor(inputSeconds / 3600);
	let minutes = Math.floor((inputSeconds % 3600) / 60);
	let seconds = Math.floor((inputSeconds % 3600) % 60);

	hours < 10 ? (hours = `0${hours}`) : (hours = hours);
	minutes < 10 ? (minutes = `0${minutes}`) : (minutes = minutes);
	seconds < 10 ? (seconds = `0${seconds}`) : (seconds = seconds);

	return `${hours}:${minutes}:${seconds}`;
}

timeFormat(seconds);
