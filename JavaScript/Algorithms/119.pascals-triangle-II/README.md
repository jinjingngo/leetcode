# [119. Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/)

## Description

Given a non-negative index *k* where *k <= 33*, return the *kth* index rotw of the Pascal's traingle.

Note that the row index starts from 0.

![In Pascal's Triangle, each number is the sum of the two numbers directly above it.](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

## Example

```example
Input: 3
Output: [1, 3, 3, 1]
```

## Follow up

Could you optimize your algorithm to use only O(k) extra space?

## Solution

```javascript
/**
 * @param {Number} rowIndex
 * @returns {Array<Number>}
 */
const getRow = rowIndex => {
  const generate = numRows => {
    if (numRows === 0) return [];
    const result = [];
    for (let i = 0; i < numRows; i++) {
      let currRow = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          currRow.push(1);
        } else {
          currRow.push(result[i - 1][j - 1] + result[i - 1][j]);
        }
      }
      result.push(currRow);
    }
    return result;
  };
  const triangle = generate(rowIndex + 1);
  return triangle[rowIndex];
};
```
