var root = document.querySelector(':root');

function setSetting(variant,id,str1,str2) {
	switch (variant) {
	case 0:
		root.style.setProperty(str1, str2);
		saveSetting(variant,id,str1,str2,"");
		break;
	case 1:
		let set = document.getElementById(id).value;
		root.style.setProperty(str1, set + str2);
		saveSetting(variant,id,str1,str2,set);
		break;
	case 2:
		document.documentElement.setAttribute(str1, str2);
		saveSetting(variant,id,str1,str2,"");
		break;
	}
}
function saveSetting(variant,id,str1,str2,x) {
	let arrSett = [variant, str1, str2, x];
	localStorage.setItem(id, JSON.stringify(arrSett));
}
