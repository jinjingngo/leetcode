# [461. Hamming Distance](https://leetcode.com/problems/hamming-distance/description/)

## Description

The [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) between two integers is the number of positions at which the corresponding bits are different.  
Given two integers x and y, calculate the Hamming distance

## Note

0 ≤ x, y < 2^31.

## Example

```javascript
Input: x = 1, y = 4;
Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
```

## Solution

```javascript
/**
 * convert given number into it's corresponsding bits.
 * @param {number} number
 * @returns {string} bits
 */
const convertToBits = (number) => {
  const bits = number.toString(2);
  return bits;
};

/**
 * prepend 0 on given bits reach the given length
 * @param {string} bits
 * @param {number} length
 */
const unshiftBits = (bits, length) => {
  const full = new Array((length - bits.length) + 1).join(0) + bits;
  return full;
};

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
const hammingDistance = (x, y) => {
  const length = 31;
  const xbits = convertToBits(x);
  const ybits = convertToBits(y);
  let xFull = unshiftBits(xbits, length);
  let yFull = unshiftBits(ybits, length);
  let difference = 0;
  for (let i = 0; i < length; i++) {
    if (xFull[i] !== yFull[i]) {
      difference += 1;
    }
  }

  return difference;
};
```

I initially don't understand this problem, till I figure what is Hamming distance.  
So it's a string manipulation problem.  
First get corresponding bits of x and y.  
Second prepending 0 on the bits, length = 31 is because 32 bits will be represented as EPSILON, as noted in [Note](#note).  
And now, we compare the difference and added it up;

But what the heck of other submission do with [XOR](https://leetcode.com/problems/hamming-distance/discuss/94698/Java-1-Line-Solution-:D), I should learn these awesome skills now.