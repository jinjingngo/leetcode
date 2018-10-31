/**
 * @param {Array} A
 * @returns {Array}
 */
const sortArrayByParityII = (A) => {
	const parity = [];
	let even = 0;
	let odd = 1;
	A.forEach(element => {
		const index = element % 2 === 0 ? even : odd;
		parity[index] = element;
		element % 2 === 0 ? even += 2 : odd += 2;
	});
	return parity;
};

const A = [4, 2, 5, 7];
const parity = sortArrayByParityII(A);
console.log(parity);
