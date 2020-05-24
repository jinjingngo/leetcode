/**
 * Self dividing numbers
 * @param {number} left
 * @param {number} right
 * @returns {number[]}
 */
const selfDividingNumbers = (left, right) => {
	const list = [];
	for (let i = left; i <= right; i++) {
		const digits = i.toString().split('');
		const divied = digits.every(bit => i % parseInt(bit) === 0);
		if (divied) {
			list.push(i);
		}
	}
	return list;
};

const left = 1;
const right = 22;
const list = selfDividingNumbers(left, right);
console.log(list);
