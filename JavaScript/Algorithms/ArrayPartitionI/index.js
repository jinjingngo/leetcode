/**
 * Array Partition I
 * @param {Array} nums
 */
const arrayPairSum = nums => {
	const asc = (a, b) => a - b;
	const reducer = (accumulator, current) => accumulator + current;
	const minmumer = (digit, index) => index % 2 === 0;
	nums.sort(asc);
	const minimum = nums.filter(minmumer);
	const maximum = minimum.reduce(reducer);
	return maximum;
};

// const nums = [1, 4, 3, 2, 12, 11];
const nums = [11, 41, -9046, 2047, 1118, 8477, 8446, 279, 4925, 7380, -1719, 3855]; // [1, 4, 3, 2, 12, 11];
const max = arrayPairSum(nums);
console.log(max);
