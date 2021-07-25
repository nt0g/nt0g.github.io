let pDown = false;

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
function eventDown(event) {
	calculations(event);
	pDown = true;
}
function eventEnter(event) {
	if (pDown === true) {
		event.target.classList.add('anim-pressed');
	}
}
function eventMove(event) {
	if (pDown === true) {
		calculations(event);
		event.target.classList.add('anim-pressed');
	}
}
function eventLeave(event) {
	event.target.classList.remove('anim-pressed');
}
function eventUp(event) {
	if (pDown === true) {
		event.target.classList.remove('anim-pressed');
		root.style.setProperty('--yrot', '0deg');
		root.style.setProperty('--xrot', '0deg');
		root.style.setProperty('--zsca', '1');
		pDown = false;
	}
}
function startup() {
	const cur =  document.querySelectorAll('.animated');
    let length = cur.length;
    for (index = 0; index < length; index++) {
		cur[index].addEventListener('pointerdown', eventDown, false);
		cur[index].addEventListener('pointerenter', eventEnter, false);
		cur[index].addEventListener('pointermove', eventMove, false);
		cur[index].addEventListener('pointerleave', eventLeave, false);
		cur[index].addEventListener('pointerup', eventUp, false);
		cur[index].addEventListener('pointercancel', eventUp, false);
	}
}
document.addEventListener('DOMContentLoaded', startup);
// 4.5 tetst