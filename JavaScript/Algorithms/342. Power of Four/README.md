# [342. Power of Four](https://leetcode.com/problems/power-of-four/)

## Description

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

## Example 1

```javascript
Input: 16
Output: true
Explanation: 2^4 = 16
```

## Example 2

```javascript
Input: 5
Output: false
```

## Solution Recursively

```javascript
const isPowerOfFour = (n) => {
  if (n < 1) {
    return false;
  } else if (n === 1) {
    return true;
  } else {
    return isPowerOfFour(n /= 4);
  }
};
```