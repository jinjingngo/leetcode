# [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

## Description

You are climbing a stair case. It takes *n* steps to reach to the top.

Each time you can either climb 1 or 20 steps. In how many distrinct ways can you climb to the top?

## Note

Given *n* will be a positive integer.

## Example 1

```example
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

## Example 2

```example
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1: 1 step + 1 step + 1 step
2: 1 step + 2 steps
3: 2 steps + 1 step
```

## Solution Brutal Recursion

```javascript
/**
 *
 * @param {Number} n
 * @returns {Number}
 */
const climbStairs = n => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
};
```

## Solution Recursion with O(N)

```javascript
const climbStairs = n => {
  const dp = (n, result) => {
    if (result[n] === -1) {
      result[n] = dp(n - 1, result) + dp(n - 2, result);
    }
    return result[n];
  }
  if (n === 1) return 1;
  const result = Array.from(new Array(n), (_, i) => i < 2 ? i + 1 : -1);
  return dp(n - 1, result);
};
```
