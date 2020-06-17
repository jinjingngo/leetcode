# [96. Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)

## Description

Given *n*, how many structurally unique **BST's** (binary search trees) that store value 1 ... n?

## Example

```example
Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:
1       3       3       2         1
 \     /       /       / \         \
  3   2       1       1   3         2
 /   /         \                     \
2   1           2                     3
```

## Solution

```javascript
/**
 * @param {Number} n
 * @returns {Number}
 */
const numTrees = n => {
  const result = Array.from({ length: n + 1 }, (_, i) => i <= 1 ? 1 : 0);
  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      result[i] += result[j - 1] * result[i - j];
    }
  }
  return result[n];
};

const number = 3;
const result = numTrees(number);
console.log(result);
```
