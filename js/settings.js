let root = document.querySelector(':root');

function saveSetting(type,id,name,value,prv) {
	let arrSett = [type, id, name, value, prv];
	localStorage.setItem(id, JSON.stringify(arrSett));
}

function setSetting(type,id,name,value,query) {
	switch (type) {
	case 0:
		root.style.setProperty(name, value);
		saveSetting(type,id,name,value,"");
		break;
	case 1:
		let set = document.getElementById(id).value;
		root.style.setProperty(name, set + value);
		saveSetting(type,id,name,value,set);
		break;
	case 2:
		document.documentElement.setAttribute(name, value);
		saveSetting(type,id,name,value,"");
		break;
	case 'checkbox':
		document.documentElement.setAttribute(name, value);
		saveSetting(type,id,name,value,query);
		break;
	}
}
function checkboxHandle(state, name) {
	switch (state) {
	case 'on':
		switch (name) {
		case 'data-mute':
			console.log('Muted');
			muted = true;
			break;
		}
		break;
	case 'off':
		switch (name) {
		case 'data-mute':
			console.log('Unmuted');
			muted = false;
			break;
		}
		break;
	}
}
function checkboxChange(id,name,query) {
	if (document.getElementById(id).checked) {
		checkboxHandle('on',name);
		setSetting('checkbox',id,name,true,query);
		if (muted === false) new Audio(audioClickOn).play();
	}
	else {
		checkboxHandle('off',name);
		setSetting('checkbox',id,name,false,query);
		if (muted === false) new Audio(audioClickOff).play();
	}
}