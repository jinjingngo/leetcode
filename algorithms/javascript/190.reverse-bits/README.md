# [190. Reverse Bits](https://leetcode.com/problems/reverse-bits/)

## Description

Reverse bits of a given 32 bits unsigned integer.

## Example 1

```example
Input: 00000010100101000001111010011100
Output: 00111001011110000010100101000000
Explanation: The input binary string 00000010100101000001111010011100 represents the unsinged integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
```

## Example 2

```example
Input: 11111111111111111111111111111101
Output: 10111111111111111111111111111111
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4293967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
```

## Note

- Note that in some languages such as Java, there is no unsinged integer type. In this case, boty input and output will be given as singed integer type and should not affect your implementation, as the internal representation of the integer is the same whether it is singed or unsigned.
- In java, the compiler represents the signed integers using [2's complement notation](https://en.wikipedia.org/wiki/Two%27s_complement). Therefore, in **Example 2** above the input represents the signed integer `-3` and the output represents the signed integer `-1073741825`.

## Solution

```javascript
const reverseBits = n => {
  let result = 0;
  let count = 32;

  while (count--) {
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }
  return result;
};
```
