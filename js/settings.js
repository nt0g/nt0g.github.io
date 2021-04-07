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

function setDark() {
  rt.style.setProperty('--bgcolor', 'rgb(10,10,10)');
  rt.style.setProperty('--block-bgcolor', 'rgba(20,20,20,1)');
  rt.style.setProperty('--block-contentcolor', 'rgba(31,31,31,1)');
  rt.style.setProperty('--block-bordercolor', 'rgba(20,20,20,1)');
  rt.style.setProperty('--accentcolor', 'rgba(120,140,200,1)');
  rt.style.setProperty('--selcolor', '255');
  rt.style.setProperty('--opaque-selcolor', '40');
  rt.style.setProperty('--textcolor', 'rgba(245,245,245,1)');
}
function setLight() {
  rt.style.setProperty('--bgcolor', 'rgb(250,240,240)');
  rt.style.setProperty('--block-bgcolor', 'rgba(200,200,200,1)');
  rt.style.setProperty('--block-contentcolor', 'rgba(255,255,255,1)');
  rt.style.setProperty('--block-bordercolor', 'rgba(150,150,150,1)');
  rt.style.setProperty('--accentcolor', 'rgba(120,140,200,1)');
  rt.style.setProperty('--selcolor', '0');
  rt.style.setProperty('--opaque-selcolor', '245');
  rt.style.setProperty('--textcolor', 'rgba(5,5,5,1)');
}