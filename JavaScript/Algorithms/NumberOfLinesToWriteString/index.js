/**
 * Number of lines to write string
 * @param {Array} widths
 * @param {string} S
 */
const numberOfLines = (widths, S) => {
	const result = [1, 0];
	const length = S.length;
	for (let i = 0; i < length; i++) {
		const charWidth = widths[S.charCodeAt(i) - 97];
		if (result[1] + charWidth > 100) {
			result[0] += 1;
			result[1] = charWidth;
		} else {
			result[1] += charWidth;
		}
	}
	return result;
};

const widths = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
const S = 'bbbcccdddaaa';
const result = numberOfLines(widths, S);
console.log(result);
