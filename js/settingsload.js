function loadSetting(variant,str1,str2,prev) {
	switch (variant) {
	case 0:
		root.style.setProperty(str1, str2);
		break;
	case 1:
		root.style.setProperty(str1, prev + str2);
		break;
	case 2:
		document.documentElement.setAttribute(str1, str2);
		break;
	}
}
function initSettings() {
	for (i = 0; i < localStorage.length; i++) {
		let varName = localStorage.key(i);
//		console.log(varName);
		let argSet = JSON.parse(localStorage.getItem(varName));
//		console.log(argSet);
		loadSetting(...argSet);
	} 
}
function initClock(){
	setInterval(function() {
		var minutes = new Date().getMinutes();
		document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;
		var hours = new Date().getHours();
		document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;
	}, 1000);
}

function initCheckboxUpdate() {
	if (document.documentElement.hasAttribute("data-color-mode")) {
		if (document.documentElement.getAttribute("data-color-mode") === 'dark') {
			check.checked = true;
		}
	} else {
		check.checked = false;
	}
}

function initAnimatorTimer() {
	window.setTimeout(function() {
		document.documentElement.classList.add('animated')
	}, 500)
}

document.addEventListener('DOMContentLoaded', initSettings);
document.addEventListener('DOMContentLoaded', initClock);
document.addEventListener('DOMContentLoaded', initCheckboxUpdate);
document.addEventListener('DOMContentLoaded', initAnimatorTimer);