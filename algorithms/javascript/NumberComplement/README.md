# [476. Number Complement](https://leetcode.com/problems/number-complement/description/)

## Description

Given a positive integer, output its complement number. The complemnt strategy is to flip the bits of the binary representation.  

## Note

1. The given integer is guaranteed to fit within the range of a 32-bit signed integer.
2. You could assume no leading zero bit in the integer's binary representation.

## Example 1

```javascript
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
```

## Example 2

```javascript
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
```

## Solution

```javascript
/**
 * Given a positive integer, output its complement number.
 * The complement strategy is to flip the bits of its binary representation
 * @param {number} num
 * @returns {number}
 */
const findComplement = (num) => {
  const binary = num.toString(2);
  const complementBinary = binary.split('').map(digit => digit ^ 1).join('');
  const complement = parseInt(complementBinary, 2);
  return complement;
};
```

1. get the binary representation of the `num`
2. get the complement in binary representation  
- map each digit of the binary
- return digit xor 1 as the complement of each digit
- return whole complement represent in string
3. output `num` complement number.