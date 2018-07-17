// /**
//  * @param {string} str
//  * @return {string}
//  */
// const toLowerCase = (str) => {
// 	const result = str.split('').map(char => {
// 		const charAt = char.codePointAt();
// 		const toCharAt = (charAt >= 65 && charAt <= 90) ? charAt + 32 : charAt;
// 		return String.fromCodePoint(toCharAt);
// 	}).join('');
// 	return result;
// };

const convertChar = (char) => {
	const code = char.codePointAt();
	const toCode = (code >= 65 && code <= 90) ? code + 32 : code;
	return String.fromCodePoint(toCode);
};

const toLowerCase = (str) => {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		result += convertChar(str[i]);
	}
	return result;
};

const orig = 'Hello';
const dest = toLowerCase(orig);
console.log('I', orig);
console.log('O', dest);
