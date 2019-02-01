# [258. Add Digits](https://leetcode.com/problems/add-digits/)

## Description

Given a non-negative integer `num`, repeatedly add all its digits until the result has only one digit.

## Example

```javascript
Input: 38
Output: 2
Explanation: The precess is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
```

## Solution with recursion

```javascript
/**
 * Recursionaly add every digits in the given integer until the only one digit left.
 * @param {Number} num
 * @returns {Number}
 */
const addDigits = (num) => {
  const digits = num.toString();
  if (digits.length === 1) {
    return Number(digits);
  } else {
    return addDigits(digits.split('').reduce(acculator, 0));
  }
};

const acculator = (acc, v) => acc + Number(v);

const digits = 38890;
const result = addDigits(digits);
console.log(result);
```

## Solution with congruence formula

```javascript
/**
 * Since this is a *digit root* problem, use th congruence formula to solve it.
 * @param {Number} num
 * @returns {Number}
 */
const addDigits = (num) => 1 + (num - 1) % 9;

const digits = 0;
const result = addDigits(digits);
console.log(result);
```