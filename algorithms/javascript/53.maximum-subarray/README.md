# [53. Maximum Array](https://leetcode.com/problems/maximum-subarray/)

## Description

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and rethr its sum.

## Example

```example
Input: [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]
Output: 6
Explanation: [ 4, -1, 2, 1 ] has the largest sum = 6
```

## Follow up

If you have figured out the O(*n*) solution, try coding another solution using the divide and conquer approach, which is more subtle.

## Solution

```javascript
/**
 * assume the sub problem into max = nums[0:i], that comes with a easy solution.
 * @param {Array} nums
 * @returns {Number}
 */
const maxSubArray = nums => {
  const length = nums.length;
  const dp = new Array(length);
  dp[0] = nums[0];
  let max = dp[0];
  for (let i = 0; i < length; i++) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    max = Math.max(max, dp[i]);
  }
  return max;
};
```
