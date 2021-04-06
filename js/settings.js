var rt = document.querySelector(':root');

function setSetting(variant,id,str1,str2) {
	if (variant === 0) {
		rt.style.setProperty(str1, str2);
	} else if (variant === 1) {
		let x = document.getElementById(id).value;
		rt.style.setProperty(str1, x + str2);
	}
}

function playAnimation() {
  document.querySelector(".pulsar").className = "pulsar";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector(".pulsar").className = "pulsar pulse";
    });
  });
}

function loadFile(filePath) {
	var result = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET","themes/" + filePath + ".txt", false);
	xmlhttp.send();
	if (xmlhttp.status==200) {
		result = xmlhttp.responseText;
	}
	return result;
};

function setTheme(choice) {
	var plain = loadFile(choice);
	var array = [];
	array = plain.split(/\n|\r/g);
	array.forEach(function(entry) {
		var sndarray = []
		sndarray = entry.split(/\|/);
		str11 = sndarray[0];
		str21 = sndarray[1];
		setSetting(0,0,str11,str21);
	});
};

var queryDark = window.matchMedia('(prefers-color-scheme: dark)');
function handleDChange(e) {
  if (e.matches) {
    console.log('Dark!');
	setTheme('dark');
  }
};
queryDark.addListener(handleDChange);
handleDChange(queryDark);

var queryLight = window.matchMedia('(prefers-color-scheme: light)');
function handleLChange(e) {
  if (e.matches) {
    console.log('Light!');
	setTheme('light');
  }
};
queryLight.addListener(handleLChange);
handleLChange(queryLight);