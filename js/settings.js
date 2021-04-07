var root = document.querySelector(':root');
var check = document.getElementById('switchTheme');

function setSetting(variant,id,str1,str2) {
	if (variant === 0) {
		root.style.setProperty(str1, str2);
	} else if (variant === 1) {
		let x = document.getElementById(id).value;
		root.style.setProperty(str1, x + str2);
	}
}
function changeTheme() {
if (check.checked === true) {
	setDark();
}
else {
	setLight();
}
};
function setDark() {
  root.style.setProperty('--bgcolor', 'rgb(10,10,10)');
  root.style.setProperty('--block-bgcolor', 'rgba(20,20,20,1)');
  root.style.setProperty('--block-contentcolor', 'rgba(31,31,31,1)');
  root.style.setProperty('--block-bordercolor', 'rgba(20,20,20,1)');
  root.style.setProperty('--selcolor', '255');
  root.style.setProperty('--opaque-selcolor', '40');
  root.style.setProperty('--textcolor', 'rgba(245,245,245,1)');
}
function setLight() {
  root.style.setProperty('--bgcolor', 'rgb(250,240,240)');
  root.style.setProperty('--block-bgcolor', 'rgba(200,200,200,1)');
  root.style.setProperty('--block-contentcolor', 'rgba(255,255,255,1)');
  root.style.setProperty('--block-bordercolor', 'rgba(150,150,150,1)');
  root.style.setProperty('--selcolor', '0');
  root.style.setProperty('--opaque-selcolor', '245');
  root.style.setProperty('--textcolor', 'rgba(5,5,5,1)');
}

const inputs = [].slice.call(document.querySelectorAll('input'));
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
function handleUpdate(e) {
	if (this.id === 'hue') root.style.setProperty('--h', this.value);
	if (this.id === 'sat') root.style.setProperty('--s', this.value + "%");
	if (this.id === 'lig') root.style.setProperty('--l', this.value + "%");
}