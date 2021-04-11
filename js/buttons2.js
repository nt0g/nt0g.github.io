var pressed = false;
var mouseMoved = false;

function calculations(event) {
	var bounds = event.target.getBoundingClientRect();
	var hWid = bounds.width / 2;
	var hHei = bounds.height / 2;
	var xPos = event.clientX - bounds.left - hWid;
	var yPos = event.clientY - bounds.top - hHei;
	var xPer = xPos / hWid;
	var yPer = -1 * yPos / hHei;
	var zSca = ((Math.abs(xPer) + Math.abs(yPer)) / 2);
	var zTes = 0.975 + 0.025 * zSca;
	var xAng = Math.round(xPer * 15);
	var yAng = Math.round(yPer * 15);
	root.style.setProperty('--yrot', xAng + 'deg');
	root.style.setProperty('--xrot', yAng + 'deg');
	root.style.setProperty('--zsca', zTes.toFixed(2));
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
		root.style.setProperty('--yrot', '0deg');
		root.style.setProperty('--xrot', '0deg');
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
	simulatedEvent.initMouseEvent(mouseEvent, false, true, window, 1,
	touch.screenX, touch.screenY,
	touch.clientX, touch.clientY, false,
	false, false, false, 0, null);
	touch.target.dispatchEvent(simulatedEvent);
	event.preventDefault();
}

function startup() {
		window.addEventListener('mousedown', eventStart, false);
		window.addEventListener('mousemove', eventCont, false);
		window.addEventListener('mouseup', eventEnd, false);
		window.addEventListener("touchstart", touchHandler, true);
		window.addEventListener("touchmove", touchHandler, true);
		window.addEventListener("touchend", touchHandler, true);
		window.addEventListener("touchcancel", touchHandler, true);
}
window.addEventListener("DOMContentLoaded", startup);
