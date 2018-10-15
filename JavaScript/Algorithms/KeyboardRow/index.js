/**
 * @param {Array} words
 * @returns {Array}
 */
const findWords = (words) => {
	const rows = [
		[ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ],
		[ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ],
		[ 'z', 'x', 'c', 'v', 'b', 'n', 'm' ]
	];
	const rule = (word, rows) => {
		const letters = word.toLowerCase().split('');
		const first = letters.shift();
		const inRow = rows.filter(row => row.includes(first)).shift();
		const differentRow = letters.some(letter => !inRow.includes(letter));
		return !differentRow;
	};
	const matches = words.filter(word => rule(word, rows));
	return matches;
};

const words = [ 'Hello', 'Alaska', 'Dad', 'Peace' ];
const sameRow = findWords(words);
console.log(sameRow);
