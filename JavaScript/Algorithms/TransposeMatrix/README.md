#  [868. Transpose Matrix](https://leetcode.com/problems/transpose-matrix/description/)

## Description
Given a matrix `A`, return the transpose of `A`.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

## Example
```
Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

```
Input: [[1, 2, 3], [4, 5, 6]]
Output: [[1, 4], [2, 5], [3, 6]]
```

## Solution
```javascript
const transpose = function (A) {
  const result = new Array(A[0].length);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(A.length);
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = A[j][i];
    }
  }

  return result;
};
```

Two for loops.
First we initial an array `result` as `A`'s child elements' length, and we loop in it's(`A`'s child elements') length, and initial an array as `A`'s length push it into array `result`.
Second we loop in `A`'s length;
And we give the `A[j][i]` to `result[i][j]`.
Thats all about my solution.

But I found a solution more efficiency
```javascript
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
let transpose = (matrix) => {
  return matrix[0].map((col, i) => matrix.map(row => row[i]));
}
```