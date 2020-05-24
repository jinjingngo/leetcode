# [283. Move Zeros](https://leetcode.com/problems/move-zeroes/)

## Description

Given an array `nums`, write a function to move all `0`'s to the end of it while maintaining to relative order of the non-zero elements.

## Example

```example
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
```

## Note

1. You must do this **in-place** without making a copy of the array.
2. Minmize the total number of operations

## Solution

```javascript
/**
 * 1. Shift non-zero values as for forward as possible.
 * 2. Fill remaining space with zeros.
 * @param {Array} nums
 * @returns {undefined}
 */
const moveZeros = (nums) => {
  if (!nums || nums.length === 0) return [];
  let insertPosition = 0;
  nums.forEach(num => {
    if (num !== 0) nums[insertPosition++] = num;
  });
  while (insertPosition < nums.length) {
    nums[insertPosition++] = 0;
  }
};

const nums = [0, 1, 0, 3, 12];
moveZeros(nums);
console.log(JSON.stringify(nums));
```
