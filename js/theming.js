const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
let check = document.getElementById('switchTheme');


function themeCheckboxChange() {
	if (check.checked === true) {
		setSetting(2,'color','data-color-mode','dark');
	}
	else {
		setSetting(2,'color','data-color-mode','light');
	}
}

function colorUpdate(e) {
	root.style.setProperty('--accent-hue-manual', this.value);
	document.getElementById('huex').value = this.value;
}

function setAccentColor() {
	setSetting(1,'hue','--accent-hue','');
}

const ranges = [].slice.call(document.querySelectorAll('.colorRange'));
ranges.forEach(input => input.addEventListener('change', colorUpdate));
ranges.forEach(input => input.addEventListener('pointermove', colorUpdate));
