/**
 * Find a unique element in an array which apperance only once.
 * Using `Arrap.prototype.reduce()` to resulting an single output value.
 * Using XOR for not same value due to the natural of bellow:
 * n XOR n = 0;
 * 0 XOR n = n;
 * @param {Array} nums;
 * @returns {Number}
 */
const singleNumber = nums => {
	const single = nums.reduce((acc, val) => acc ^ val);
	return single;
};

const nums = [4, 1, 2, 1, 2];
const number = singleNumber(nums);
console.log(number);
