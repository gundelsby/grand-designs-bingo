import SquareDataStore from '../data/square-store.js';

console.log('Initalizing game...');

const dataStore = new SquareDataStore('/data/squares.json');

async function init() {
	for (const card of document.querySelectorAll('.bingo-card')) {
		const squares = card.querySelectorAll('.bingo-card--square');
		if (squares.length) {
			const value = (await dataStore.getCardValueGenerator(squares.length))();
			for (const square of squares) {
				square.textContent = value.next().value.text;
			}
		}
	}
}

init()
	.then(() => {
		console.log('Game init complete');
	})
	.catch(console.error);
