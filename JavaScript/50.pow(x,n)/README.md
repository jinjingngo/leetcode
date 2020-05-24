# [50. Pow(x, n)](https://leetcode.com/problems/powx-n/)

## Description

Implement `pow(x, n)`, which caculates *x* raised to the power *n(x^n)*.

## Example 1

```example
Input: 2.00000, 10
Output: 1024.00000
```

## Example 2

```example
Input: 2.10000, 3
Output: 9.26100
```

## Example 3

```example
Input: 2.00000, -2
Output: 0.25000
Explanation: 2^-1 = 1/2^2 = 1/4 = 0.25
```

## Note

- 100.0 < 100.0 < 100.0
- *n* is a 32-bit signed integer, within the range [-2^31, 2^31 - 1]

## Solution

```javascript
/**
 * @param {Number} x
 * @param {Number} n
 * @returns {Number}
 */
const myPow = (x, n) => {
  if (n === 0) return 1;
  if (n < 0) return 1.0 / myPow(x, -n);
  const half = myPow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return half * half;
  } else {
    return half * half * x;
  }
};
```
