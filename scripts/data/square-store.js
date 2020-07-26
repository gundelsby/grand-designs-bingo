export default class SquareDataStore {
	constructor(url) {
		this.squareValues = fetch(url)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
			})
			.then((squareValues) => {
				// the randomization could be moved to the generator
				// get function, which would make the contents of
				// cards in the same game more random
				return squareValues
					.map((value) => ({ sort: Math.random(), value }))
					.sort((a, b) => a.sort - b.sort)
					.map((o) => o.value);
			});
	}

	async getCardValueGenerator(numSquares) {
		const values = await this.squareValues;

		const start = Math.floor(Math.random() * (values.length - numSquares));
		const cardValues = values.slice(start, start + numSquares);

		return function* cardValueGenerator() {
			while (cardValues.length) {
				yield cardValues.pop();
			}
		};
	}
}
