const nextGreaterElement = (nums1, nums2) => {
	const hash = nums2.reduce((prev, curr, index) => {
		prev[curr] = index;
		return prev;
	}, {});

	const greaterNums = nums1.reduce((prev, curr) => {
		const index = hash[curr];
		let nexGreatestNum = -1;
		for (let i = index; i < nums2.length && nexGreatestNum === -1; i++) {
			if (nums2[i] > curr) {
				nexGreatestNum = nums2[i];
			}
		}
		prev.push(nexGreatestNum);
		return prev;
	}, []);
	return greaterNums;
};

// const nums1 = [4, 1, 2];
// const nums2 = [1, 3, 4, 2];
const nums1 = [2, 1, 3];
const nums2 = [2, 3, 1];
const greater = nextGreaterElement(nums1, nums2);
console.log(greater);
