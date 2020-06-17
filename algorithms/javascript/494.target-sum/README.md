# [494. Target Sum](https://leetcode.com/problems/target-sum/)

## Description

You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols `+` and `-`. For each integer, you should choose one from `+` and `-` as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

## Example 1

```e.g.
Input: nums is [ 1, 1, 1, 1, 1 ], S is 3.
Output: 5
Explanation:

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.
```

## Note

1. The length of the given array is positive and will not exceed 20.
2. The sum of elements in given array will not exceed 100.
3. Your output answer is guaranteed to be fitted in a 32-integer.

## Solution

```javascript
/**
 * @param {Array} sum
 * @param {Number} S 
 * @returns {Number}
 */
const findTargetSumWays = (nums, s) => {
  const accumulator = (accumulate, n) => {
    return accumulate + n;
  };
  const sum = nums.reduce((acc, n) => acc + n, 0);
  if (s < -sum || s > sum) return 0;
  const rightRange = sum * 2 + 1;
  let dp = Array.from({ length: rightRange }, (x, i) => i === sum ? 1 : 0);
  dp[sum] = 1;
  for (let i = 0; i < nums.length; i++) {
    const temp = Array.from({ length: rightRange }, x => 0);
    for (let j = 0; j < rightRange; j++) {
      if (dp[j] != 0) {
        temp[j + nums[i]] += dp[j];
        temp[j - nums[i]] += dp[j];
      }
    }
    dp = temp;
  }
  return dp[sum + s];
};


const nums = [1, 1, 1, 1, 1];
const s = 3;
const ways = findTargetSumWays(nums, s);
console.log(ways); // 5
```
