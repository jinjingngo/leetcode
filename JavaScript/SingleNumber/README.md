# [136. Single Number](https://leetcode.com/problems/single-number/description/)

## Description

Given a **non-empty** array of integers, every element appears *twice* for one. Find that single one.

## Note

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

## Example 1

```javascript
Input: [2, 2, 1]
Output: 1
```

## Example 2

```javascript
Input: [4, 1, 2, 1, 2]
Output: 4
```

## Solution 1

```javascript
const singleNumber = nums => {
  const single = nums.filter((v, i) => nums.every((x, j) => (i === j) === (v === x)));
  return single[0];
};

const nums = [4, 1, 2, 1, 2];
const number = singleNumber(nums);
console.log(number);
```

Take too long.

## Solution 2

```javascript
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
```