const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
let check = document.getElementById('switchTheme');

function setThemeSetting(value) {
	let arrVal = ['theme',0,value,0];
	localStorage.setItem('theme', JSON.stringify(arrVal));
}
function setDark() {
	root.style.setProperty('--selcolor', '255');
	root.style.setProperty('--opaque-selcolor', '40');
	root.style.setProperty('--textcolor', 'rgba(215,215,220,1)');
	root.style.setProperty('--ln', '5%');
	check.checked = true;
}
function setLight() {
	root.style.setProperty('--selcolor', '0');
	root.style.setProperty('--opaque-selcolor', '245');
	root.style.setProperty('--textcolor', 'rgba(35,35,40,1)');
	root.style.setProperty('--ln', '90%');
	check.checked = false;
}
function changeTheme() {
if (check.checked === true) {
	setDark();
	setThemeSetting(0);
}
else {
	setLight();
	setThemeSetting(1);
}
}
function getTheme(tValue) {		
	let style = getComputedStyle(root);
	let speed = style.getPropertyValue('--animation-duration');
//	console.log(speed);
	switch (tValue) {
	case 0:
		root.style.setProperty('--animation-duration', '0ms');
		setDark();
		setTimeout (() => root.style.setProperty('--animation-duration', speed),100);
		break;
	case 1:
		root.style.setProperty('--animation-duration', '0ms');
		setLight();
		setTimeout (() => root.style.setProperty('--animation-duration', speed),100);
		break;
	}
}

function colorUpdate(e) {
	switch (this.id) {
	case 'hue':
		root.style.setProperty('--hm', this.value);
		document.getElementById('huex').value = this.value;
		break;
	case 'sat':
		root.style.setProperty('--sm', this.value + "%");
		document.getElementById('satx').value = this.value;
		break;
	case 'lig':
		root.style.setProperty('--lm', this.value + "%");
		document.getElementById('ligx').value = this.value;
		break;
	}
}
function setColor() {
	setSetting(1,'hue','--h','');
	setSetting(1,'sat','--s','%');
	setSetting(1,'lig','--l','%');
}

const ranges = [].slice.call(document.querySelectorAll('.colorRange'));
ranges.forEach(input => input.addEventListener('change', colorUpdate));
ranges.forEach(input => input.addEventListener('pointermove', colorUpdate));
