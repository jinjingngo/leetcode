# [231. Power of Two](https://leetcode.com/problems/power-of-two/)  

## Description

Given an integer, write a function to determine if it is a power of two.

## Example 1

```javascript
Input: 1
Output: true
Explanation: 2^0 = 1
```

## Example 2

```javascript
Input: 16
Output: true
Explanation: 2^4 = 16
```

## Example 3

```javascript
Input: 218
Output: false
```

## Solution Recursively

```javascript
const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  } else if (n === 1) {
    return true;
  } else {
    return isPowerOfTwo( n /= 2);
  }
};
```