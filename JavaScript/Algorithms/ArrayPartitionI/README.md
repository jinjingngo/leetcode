# [561. Array Partition I](https://leetcode.com/problems/array-partition-i/description/)

## Description
Given an array of **2n** integers, your task is to group these integers into **n** pairs of integers, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all *i* from *1* to *n* as larget as possible.  

## Example 1
```
Input: [1, 4, 3, 2]

Output: 4
Explanation: n is 2, and to maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
```

## Note:
1. **n** is a positive integer, which is in the range of [1, 10000]
2. All the integers in the array will be in the range of [-10000, 10000]

## Solution 1
```javascript
const asc = (a, b) => a > b;
const reducer = (accumulator, current) => accumulator + current;
/**
 * Array Partition I
 * @param {Array} nums
 */
const arrayPairSum = nums => {
	nums.sort(asc);
	const minimum = nums.filter((digit, index) => {
		if (index === 0 || index % 2 === 0) {
			return digit;
		}
	});
	const maximun = minimum.reduce(reducer);
	return maximun;
};
```
Proved I'm wrong in this `[11, 41, -9046, 2047, 1118, 8477, 8446, 279, 4925, 7380, -1719, 3855]` test case, cause this array contains negative number, my `asc` function won't work in this;

## Solution 2
```javascript
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
	const maximun = minimum.reduce(reducer);
	return maximun;
};
```
That's right. this is my solution.  

I figured it our from the **Hints**:

> try come example like 1, 2, 3, 4  

Aha, maximums come from the pairs' minimum number. So we  
1. order the array in `asc`
2. filter the pairs' minimum number and store into an array
3. sum the minimum number array
4. got the right anwser
