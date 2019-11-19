# [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/)

## Description

Given a non-negative integer *numRows*, generate the first *numRows* of Pascal's triangle.

![In Pascal's Triangle, each number is the sum of the two numbers directly above it.](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

In Pascal's Triangle, each number is the sum of the two numbers directly above it.

## Example

```exampe
Input: 5
Output: [
       [ 1 ],
      [ 1, 1 ],
     [ 1, 2, 1 ],
    [ 1, 3, 3, 1 ],
   [ 1, 4, 6, 4, 1 ]
]
```

## Solution

```javascript
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
```
