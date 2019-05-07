# [7. Reverse Integer](https://leetcode.com/problems/reverse-integer/)

## Description

Given a 32-bit signed integer, reverse digits of an integer.

## Example 1

```example
Input: 123
Output: 321
```

## Example 2

```example
Input: -123
Output: -321
```

## Example 3

```example
Input: 120
Output: 21
```

## Note

Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

## Solution

```javascript
/**
 * 32-bit signed integer range: [−231,  231 − 1]
 */
const reverse = (x) => {
  const reverser = x => Number(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
  const reversed = reverser(x);
  return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
}

const x = 1534236469;
const rx = reverse(x);
console.log(rx); // 0
```
