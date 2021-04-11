var pressed = false;
var targt = document.querySelector('animated');

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
	
	root.style.setProperty('--yrot', xAng + 'deg');
	root.style.setProperty('--xrot', yAng + 'deg');
	root.style.setProperty('--zsca', zTes);
	
};

targetElement.onpointerdown = function(event) {
	calculations(event);
	pressed = true;
};
targetElement.onpointermove = function(event) {
	if (pressed === true) {
	calculations(event);
	};
};
targetElement.onpointerup = onpointercancel = function(event) {
	if (pressed === true) {
		root.style.setProperty('--yrot', '0deg');
		root.style.setProperty('--xrot', '0deg');
		pressed = false;
	};
};