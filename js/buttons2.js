var pressed = false;

function calculations(event) {

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

this.onclick = function(event) {
	calculations(event);
};

this.onmousedown = this.ontouchstart = function(event) {
	calculations(event);
	pressed = true;
};
this.onmousemove = this.ontouchmove = function(event) {
	if (pressed === true) {
	calculations(event);
	}
};
this.onmouseup = this.ontouchend = function(event) {
	if (pressed === true) {
		rt.style.setProperty('--yrot', '0deg');
		rt.style.setProperty('--xrot', '0deg');
		pressed = false;
	}
};