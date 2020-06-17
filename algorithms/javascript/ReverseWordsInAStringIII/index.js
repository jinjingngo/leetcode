/**
 * Reverse the order of characters in each work within a sentence
 * while still preserving whitespace and initial word roder.
 * @param {string} s
 */
const reverseWords = (s) => {
	let result = s.split(' ');
	result = result.map(word => {
		let letters = word.split('');
		letters = letters.reverse();
		return letters.join('');
	});
	return result.join(' ');
};

const input = 'Let\'s take LeetCode contest';
const output = reverseWords(input);
console.log(output);
