document.addEventListener('click', (event) => {
	console.log(event.target);
	if (event.target.classList.contains('bingo-card--square')) {
		event.target.classList.toggle('marked');
	}
});
