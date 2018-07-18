/**
 * convert given number into it's corresponsding bits.
 * @param {number} number
 * @returns {string} bits
 */
const convertToBits = (number) => {
	const bits = number.toString(2);
	return bits;
};

/**
 * prepend 0 on given bits reach the given length
 * @param {string} bits
 * @param {number} length
 */
const unshiftBits = (bits, length) => {
	const full = new Array((length - bits.length) + 1).join(0) + bits;
	return full;
};

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
const hammingDistance = (x, y) => {
	const length = 31;
	const xbits = convertToBits(x);
	const ybits = convertToBits(y);
	let xFull = unshiftBits(xbits, length);
	let yFull = unshiftBits(ybits, length);
	let difference = 0;
	for (let i = 0; i < length; i++) {
		if (xFull[i] !== yFull[i]) {
			difference += 1;
		}
	}

	return difference;
};

const x = 1577962638;
const y = 1727613287;
const distance = hammingDistance(x, y);
console.table(distance);
