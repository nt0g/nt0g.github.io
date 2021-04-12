var root = document.querySelector(':root');

function setSetting(variant,id,str1,str2) {
	if (variant === 0) {
		root.style.setProperty(str1, str2);
		saveSetting(variant,"",str1,str2,"");
	} else if (variant === 1) {
		let set = document.getElementById(id).value;
		root.style.setProperty(str1, set + str2);
		saveSetting(variant,id,str1,str2,set);
	}
}
function saveSetting(variant,id,str1,str2,x) {
	let arrSett = [variant, str1, str2, x];
	localStorage.setItem(id, JSON.stringify(arrSett));
}
function loadSetting(variant,str1,str2,prev) {
	switch (variant) {
	case 0:
		root.style.setProperty(str1, str2);
		break;
	case 1:
		root.style.setProperty(str1, prev + str2);
		break;
	case 'theme':
		getTheme(str2);
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
document.addEventListener('DOMContentLoaded', initSettings);