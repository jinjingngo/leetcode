/**
 * judge robot's move sequence is a circle or not.
 * @param {string} moves
 * @returns {boolean}
 */
const judgeCircle = (moves) => {
	let x = 0;
	let y = 0;
	const length = moves.length;
	for (let i = 0; i < length; i++) {
		if (moves[i] === 'U') {
			x += 1;
		} else if (moves[i] === 'D') {
			x -= 1;
		} else if (moves[i] === 'L') {
			y -= 1;
		} else if (moves[i] === 'R') {
			y += 1;
		}
	}
	return x === 0 && y === 0;
};

const moves = 'LL';
const result = judgeCircle(moves);
console.log(result);
