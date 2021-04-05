var rt = document.querySelector(':root');
function setDark() {
  rt.style.setProperty('--bgcolor', 'rgb(10,10,10)');
  rt.style.setProperty('--block-bgcolor', 'rgba(20,20,20,1)');
  rt.style.setProperty('--block-contentcolor', 'rgba(31,31,31,1)');
  rt.style.setProperty('--block-bordercolor', 'rgba(20,20,20,1)');
  rt.style.setProperty('--accentcolor', 'rgba(120,140,200,1)');
  rt.style.setProperty('--selcolor', '255');
  rt.style.setProperty('--textcolor', 'rgba(245,245,245,1)');
}
function setLight() {
  rt.style.setProperty('--bgcolor', 'rgb(250,240,240)');
  rt.style.setProperty('--block-bgcolor', 'rgba(200,200,200,1)');
  rt.style.setProperty('--block-contentcolor', 'rgba(255,255,255,1)');
  rt.style.setProperty('--block-bordercolor', 'rgba(150,150,150,1)');
  rt.style.setProperty('--accentcolor', 'rgba(120,140,200,1)');
  rt.style.setProperty('--selcolor', '0');
  rt.style.setProperty('--textcolor', 'rgba(5,5,5,1)');
}
function setDuration() {
  var x = document.getElementById("duration").value;
  rt.style.setProperty('--animation-duration', x + 'ms');
}
function setBlockWidth() {
  var x = document.getElementById("bwidth").value;
  rt.style.setProperty('--block-width', x + 'em');
}
function setBlockBorderRadius() {
  var x = document.getElementById("bradius").value;
  rt.style.setProperty('--borderradius', x + 'em');
}
function setBorderWidth() {
  var x = document.getElementById("brdwidth").value;
  rt.style.setProperty('--borderwidth', x + 'px');
}
function setPerspective() {
  var x = document.getElementById("perspective").value;
  rt.style.setProperty('--perspective', x + 'cm');
}
function set3dscale() {
  var x = document.getElementById("3dscale").value;
  rt.style.setProperty('--3d-scale', x);
}
function setSettingScale() {
  rt.style.setProperty('--method', 'scale(0.975)');
}
function setSettingTranslate() {
  rt.style.setProperty('--method', 'translateZ(-5px)');
}
function setSettingBoth() {
  rt.style.setProperty('--method', 'translateZ(-5px) scale(var(--zsca))');
}
function playAnimation() {
  document.querySelector(".pulsar").className = "pulsar";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector(".pulsar").className = "pulsar pulse";
    });
  });
}
window.addEventListener('mousemove', calculateAngles);
function calculateAngles(event) {
	var targ = event.target.getBoundingClientRect();
	var hWid = targ.width / 2;
	var hHei = targ.height / 2;
	var xPos = event.clientX - targ.left - hWid;
	var yPos = event.clientY - targ.top - hHei;
	var xPer = xPos / hWid;
	var yPer = -1 * yPos / hHei;
	var zSca = ((Math.abs(xPer) + Math.abs(yPer)) / 2);
	var zTes = 0.975 + 0.025 * zSca;
	var xAng = Math.round(xPer * 15);
	var yAng = Math.round(yPer * 15);
	rt.style.setProperty('--yrot', xAng + 'deg');
	rt.style.setProperty('--xrot', yAng + 'deg');
	rt.style.setProperty('--zsca', zTes);
};