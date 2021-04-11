let down = false;

function calculations(event) {
	let bounds = event.target.getBoundingClientRect();
	let hWid = bounds.width / 2;
	let hHei = bounds.height / 2;
	let xPos = event.clientX - bounds.left - hWid;
	let yPos = event.clientY - bounds.top - hHei;
	let xPer = xPos / hWid;
	let yPer = -1 * yPos / hHei;
	let zSca = ((Math.abs(xPer) + Math.abs(yPer)) / 2);
	let zTes = 0.975 + 0.025 * zSca;
	let xAng = Math.round(xPer * 15);
	let yAng = Math.round(yPer * 15);
	root.style.setProperty('--yrot', xAng + 'deg');
	root.style.setProperty('--xrot', yAng + 'deg');
	root.style.setProperty('--zsca', zTes.toFixed(2));
}
//function eventClick(event) {
//	calculations(event);
//}
function eventStart(event) {
	calculations(event);
	down = true;
}
function eventCont(event) {
	if (down === true) {
		calculations(event);
	}
}
function eventEnd(event) {
	if (down === true) {
		root.style.setProperty('--yrot', '0deg');
		root.style.setProperty('--xrot', '0deg');
		root.style.setProperty('--zsca', '1');
		down = false;
	}
}
function startup() {
	const cur =  document.querySelectorAll('.animated');
    let length = cur.length;
    for (index = 0; index < length; index++) {
//		cur[index].addEventListener('click', eventClick, false);
		cur[index].addEventListener('pointerdown', eventStart, false);
		cur[index].addEventListener('pointermove', eventCont, false);
//		cur[index].addEventListener('pointerout', eventOut, false);
		cur[index].addEventListener('pointerup', eventEnd, false);
	}
}
document.addEventListener('DOMContentLoaded', startup);
