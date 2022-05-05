let audioClick = 'sounds/click.ogg';
let audioClickSw = 'sounds/click-switch.ogg';
let audioClickOn = 'sounds/on.ogg';
let audioClickOff = 'sounds/off.ogg';

var muted = false;

function updateCheckbox(id,name,value,query) {  // loads and sets chechboxes state
	let checkboxPending = document.getElementById(id);
	let hasAttr = document.documentElement.hasAttribute(name);
	let hasQuery = window.matchMedia(query).matches;
	let getAttr = document.documentElement.getAttribute(name) === 'true';

		console.group('Checkbox:', checkboxPending);
		console.log('Attribute state:', getAttr);
		console.log('Media query exists:', hasQuery);
	if ((getAttr === true) || (!hasAttr && hasQuery)) {
		checkboxPending.checked = true;
		console.log('Checkbox checked');
	} else {
		checkboxPending.checked = false;
		console.log('Checkbox unchecked');
	}
		console.groupEnd();
}
function resetCheckboxes() { // for now
    for (index = 0; index < document.querySelectorAll('input.switch').length; index++) {
		document.querySelectorAll('input.switch')[index].checked = false;
		console.log('Checkboxes reset to unchecked');
	}
}
function loadSetting(type,id,name,value,prv) { // sets loaded settings
	switch (type) {
	case 0:
		root.style.setProperty(name, value);
		break;
	case 1:
		root.style.setProperty(name, prv + value);
		break;
	case 2:
		document.documentElement.setAttribute(name, value);
		break;
	case 'checkbox':
		document.documentElement.setAttribute(name, value);
		updateCheckbox(id,name,value,prv);
		break;
	}
	switch (name) {
	case 'data-mute':
		console.log('Is mute:', value);
		muted = value;
		break;
	}
}
function initSettings() { // loads settings from local storage
	if (localStorage.length === 0) {
			console.log('Local storage empty');
			resetCheckboxes();
	} else {
		for (i = 0; i < localStorage.length; i++) {
			let varName = localStorage.key(i);
			let argSet = JSON.parse(localStorage.getItem(varName));
			console.log('LS entry', i, ':', varName, argSet);
			loadSetting(...argSet);
		}
	}
}

function initSounds() { // sets listeners to every element that should play a sound on click
	const cur =  document.querySelectorAll('.sound');
    let length = cur.length;
    for (index = 0; index < length; index++) {
		switch (cur[index].classList.contains('switch')) {
		case true:
			cur[index].addEventListener('pointerdown', function(event) {
				if (muted === false && event.button === 0) new Audio(audioClickSw).play();
			}, false);
			break;
		default:
			cur[index].addEventListener('pointerdown', function(event) {
			if (muted === false && event.button === 0) new Audio(audioClick).play();
			}, false);
			break;
		}
	}
}

function initClock(){ // sets clock
	setInterval(function() {
		var minutes = new Date().getMinutes();
		document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;
		var hours = new Date().getHours();
		document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;
	}, 1000);
}



function initAnimatorTimer() { // prohibits animation when site loads
	window.setTimeout(function() {
		document.documentElement.classList.add('animated')
	}, 500)
}


document.addEventListener('DOMContentLoaded', initSettings);
document.addEventListener('DOMContentLoaded', initSounds);
document.addEventListener('DOMContentLoaded', initClock);
document.addEventListener('DOMContentLoaded', initAnimatorTimer);
