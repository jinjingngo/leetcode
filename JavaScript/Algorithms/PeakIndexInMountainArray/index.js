/**
 * Peak Index in a Mountain Array
 * @param {Array} A
 */
const peakIndexInMountainArray = (A) => {
	const max = Math.max(...A);
	const index = A.indexOf(max);
	return index;
};

const A = [0, 2, 1, 0];
const peak = peakIndexInMountainArray(A);
console.log(A);
console.log(peak);
