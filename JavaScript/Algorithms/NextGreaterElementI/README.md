# [496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/description/)

## Description
You are given two arrays **(without duplicates)** `nums1` and `nums2` where `nums1`'s elements are subset of `nums2`. Find all the next greater numbers for `nums1`'s elements in the corresponding places of `nums2`.

The Next Greater Number of a numbers **x** in `nums1` is the first greater number of its right in `nums2`. If it does not exist, output -1 for this number.

## Example 1
```
Input: nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2].
Output: [-1, 3, -1]
Explanation: 
	For number 4 in the first array, you cannot fint the next greater number for it in the second array, so output -1.
	For number 1 in the first array, the next greater number for it in the second array is 3.
	For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
```

## Example 2
```
Input: nums1 = [2, 4], nums2 = [1, 2, 3, 4].
Output: [3, -1]
Explanation: 
	For number 2 in the first array, the next greater number for it in the second array is 3.
	For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
```

## Note
1. All elements in `nums1` and `nums2` are unique.
2. The length of both `nums1` and `nums2` would not exceed 1000.

## Solution
```javascript
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
```