# [268. Missing Number](https://leetcode.com/problems/missing-number/)

## Description

Given an array containing *n* distinct numbers taken from `0, 1, 2, ...,`, find the one that is missing from the array.

## Example 1

```example
Input: [ 3, 0, 1 ]
Output: 2
```

## Example 2

```example
Input: [ 9, 6, 4, 2, 3, 5, 7, 0, 1 ]
Output: 8
```

## Note

Your algorithm should run in linear runtime complexity. Could you implementing it using only constrant extra space complexity?

## Solution

```javascript
/**
 * In math we know 1 + 2　＋3 + ... + n = n * (n + 1) / 2, it can be used here.
 * Since we are finding the missing number, just get the sum of all the *n* number.
 * First using this math techinque, get the `total`;
 * Second reduce the *n* array into a `sum`;
 * Third `total - sum` will be our missing number;
 * @param {number[]} nums
 * @returns {number}
 */
const missingNumber = nums => {
  const length = nums.length;
  const total = length * (length + 1) / 2;
  const sum = nums.reduce((sum, n) => sum += n, 0);
  return total - sum;
};
```
