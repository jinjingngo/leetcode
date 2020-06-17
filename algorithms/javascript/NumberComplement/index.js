/**
 * Given a positive integer, output its complement number.
 * The complement strategy is to flip the bits of its binary representation
 * @param {number} num
 * @returns {number}
 */
const findComplement = (num) => {
	const binary = num.toString(2);
	const complementBinary = binary.split('').map(digit => digit ^ 1).join('');
	const complement = parseInt(complementBinary, 2);
	return complement;
};

const orignal = 5;
const outcome = findComplement(orignal);
console.log(orignal);
console.log(outcome);
