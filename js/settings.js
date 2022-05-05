let root = document.querySelector(':root');

function saveSetting(type,id,name,value,prv) { // saves a setting to local storage as JSON string
	let arrSett = [type, id, name, value, prv];
	localStorage.setItem(id, JSON.stringify(arrSett));
}

function setSetting(type,id,name,value,query) { // should be executed on action, does different things
	switch (type) {
	case 0: // sets a value
		root.style.setProperty(name, value);
		saveSetting(type,id,name,value,"");
		break;
	case 1: // sets a value with unit
		let set = document.getElementById(id).value;
		root.style.setProperty(name, set + value);
		saveSetting(type,id,name,value,set);
		break;
	case 2: // sets an attrubute
		document.documentElement.setAttribute(name, value);
		saveSetting(type,id,name,value,"");
		break;
	case 'checkbox': // sets an attribute on checkbox change
		document.documentElement.setAttribute(name, value);
		saveSetting(type,id,name,value,query);
		break;
	}
}
function checkboxHandle(state, name) { // additional checkbox actions
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
function checkboxChange(id,name,query) { // should be executed on chechbox change
	if (document.getElementById(id).checked) {
		checkboxHandle('on',name);
		setSetting('checkbox',id,name,true,query);
		console.log(event.target.id, 'checked');
		if (muted === false) new Audio(audioClickOn).play();
	}
	else {
		checkboxHandle('off',name);
		setSetting('checkbox',id,name,false,query);
		console.log(event.target.id, 'unchecked');
		if (muted === false) new Audio(audioClickOff).play();
	}
}
