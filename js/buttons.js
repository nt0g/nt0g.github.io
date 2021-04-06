var pressed = false;
var mouseMoved = false;


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


function eventClick(event) {
	calculations(event);
};

function eventStart(event) {
	calculations(event);
	pressed = true;
};
function eventCont(event) {
	if (pressed === true) {
	calculations(event);
	}
};
function eventEnd(event) {
	if (pressed === true) {
		rt.style.setProperty('--yrot', '0deg');
		rt.style.setProperty('--xrot', '0deg');
		pressed = false;
	}
};


function touchHandler(event) {
	var mouseEvent = "mousedown";
	var simulatedEvent = document.createEvent("MouseEvent");

	switch (event.type) {
	case "touchstart":
		mouseEvent = "mousedown";
		break;
	case "touchmove":
		mouseMoved = true;
		mouseEvent = "mousemove";
		break;
	case "touchend":
		if (!mouseMoved) {
			mouseEvent = "click";
		} else {
			mouseEvent = "mouseup";
		}
		mouseMoved = false;
		break;
	}

	var touch = event.changedTouches[0];
	simulatedEvent.initMouseEvent(mouseEvent, true, true, window, 1,
	touch.screenX, touch.screenY,
	touch.clientX, touch.clientY, false,
	false, false, false, 0, null);
	touch.target.dispatchEvent(simulatedEvent);
	event.preventDefault();
}


function startup() {
	document.addEventListener('click', eventClick, false);
	document.addEventListener('mousedown', eventStart, false);
	document.addEventListener('mousemove', eventCont, false);
	document.addEventListener('mouseup', eventEnd, false);
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}
document.addEventListener("DOMContentLoaded", startup);