let check = document.getElementById('switchTheme');
let audioClick = 'sounds/click.ogg';
let audioClickOn = 'sounds/on.ogg';
let audioClickOff = 'sounds/off.ogg';

function themeCheckboxChange() {
	if (check.checked === true) {
		setSetting(2,'color','data-color-mode','dark');
		new Audio(audioClickOn).play();
	}
	else {
		setSetting(2,'color','data-color-mode','light');
		new Audio(audioClickOff).play();
	}
}

function startup() {
	const cur =  document.querySelectorAll('.push-an');
    let length = cur.length;
    for (index = 0; index < length; index++) {
		cur[index].addEventListener('pointerdown', function(event) {
			if (event.button === 0) new Audio(audioClick).play();
		}, false);
	}
}
document.addEventListener('DOMContentLoaded', startup);