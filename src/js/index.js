
document.addEventListener("click", function (event) {
	let id = event.target.dataset.toggle;
	if (!id) return;
	let elem = document.getElementById(id);
	if (!elem) return;
	elem.hidden = !elem.hidden
});
