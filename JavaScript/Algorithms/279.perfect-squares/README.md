# [279. Perfect Squares](https://leetcode.com/problems/perfect-squares/)

## Description

Given a positive integer *n*, find the least number of perfect square numbers (for example, `1, 4, 9, 16,...`) which sum to *n*.

## Example 1

```e.g.
Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4
```

## Example 2

```e.g.
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9
```

## Explanation

```javascript
/**
 * Based on Lagrange's Four Square theorem, there are only 4 possible results: 1, 2, 3, 4.
 * @param {Number} n 
 */
const numSquares = n => {
  const isSquare = n => {
    const squareN = parseInt(Math.sqrt(n));
    const result = squareN * squareN === n;
    return result;
  };

  // If n is perfect square, return 1.
  if (isSquare(n)) return 1;

  // The result is 4 if and only if n can be written in the form of 4^k(8 * m + 7).
  // Please refer to [Legendre's three-square theorem](https://en.wikipedia.org/wiki/Legendre%27s_three-square_theorem).
  while ((n & 3) === 0) { // n % 4 === 0
    n >>= 2;
  }
  if ((n & 7) === 7) { // n % 8 === 7
    return 4;
  }

  // Check whether 2 is the result.
  const squareN = parseInt(Math.sqrt(n));
  for (let i = 1; i <= squareN; i++) {
    if (isSquare(n - i * i)) {
      return 2;
    }
  }

  return 3;
};

const n = 13;
const squares = numSquares(n);
console.log(squares);
```
