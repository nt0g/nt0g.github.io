function randomVal(value) {
	let rnd = Math.round(Math.random() * value);
//	console.log(rnd);
	return rnd;
}

function galleryScrollTo() {
	let item = document.getElementById(event.target.id);
//	console.log(event.target.id);
	item.scrollIntoView({block: "nearest", inline: "center"});
}