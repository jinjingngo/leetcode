# [198. House Robber](https://leetcode.com/problems/house-robber/)

## Description

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you robbing each of them is that adjacent houses have security system connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight **without alerting the police**.

## Example 1

```example
Input: [1, 2, 3, 1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.
```

## Example 2

```example
Input: [2, 7, 9, 3, 1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total amount you can rob = 2 + 9 + 1 = 12.
```

## Solution

```javascript
const rob = nums => {
  const memo = Array.from({ length: nums.length - 1 }, x => -1);
  const worker = (nums, i, memo) => {
    if (i < 0) return 0;
    if (memo[i] >= 0) return memo[i];
    const max = Math.max(worker(nums, i - 2, memo) + nums[i], worker(nums, i - 1, memo));
    memo[i] = max;
    return max;
  }
  return worker(nums, nums.length - 1, memo);
};
```
