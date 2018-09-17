/**
 * Reverse String takes a string as input and returns the string reversed
 * @param {string} s
 * @returns {string}
 */
const reverseString = (s) => {
	return s.split('').reverse().join('');
};

const orignal = 'A man, a plan, a canal: Panama';
const outcome = reverseString(orignal);
console.log(orignal);
console.log(outcome);
