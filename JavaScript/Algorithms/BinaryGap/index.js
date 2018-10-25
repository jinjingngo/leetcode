/**
 * @param {Number} N
 * @returns {Number}
 */
const binaryGap = (N) => {
	let max = 0;
	let position = 0;
	let lastPosition = -1;
	while (N !== 0) {
		position++;
		if ((N & 1) === 1) {
			if (lastPosition !== -1) {
				max = Math.max(max, position - lastPosition);
			}
			lastPosition = position;
		}
		N >>= 1;
	}
	return max;
};

const N = 22;
const gap = binaryGap(N);
console.log(gap);
