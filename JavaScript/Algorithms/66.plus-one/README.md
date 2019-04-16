# [66. Plus One](https://leetcode.com/problems/plus-one/)

## Description

Given a **non-empty** array of digits representing a non-negative integer, plus one to integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

## Example 1

```example
Input: [1, 2, 3]
Output: [1, 2, 4]
Explanation: The array represents the integer 123.
```

## Example 2

```example
Input: [4, 3, 2, 1]
Output: [4, 3, 2, 2]
Explanation: The array represents the integer 4321.
```

## Solutiom

```javascript
const plusOne = (digits) => {
  const length = digits.length;
  for (let i = length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
const added = plusOne(digits);
console.log(JSON.stringify(added)); // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
```
