function randomVal(value) {
	let rnd = Math.round(Math.random() * value);
	console.log('Random number:', rnd);
	return rnd;
}

function galleryScrollTo() {
	let item = document.getElementById(event.target.id);
	console.log(event.target.id, 'selected');
	item.scrollIntoView({block: "nearest", inline: "center"});
}