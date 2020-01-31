# [95. Unique Binary Search Tree II](https://leetcode.com/problems/unique-binary-search-trees-ii/)

## Description

Given an integer *n*, genarate all structurally unique **BST's** (binary search trees) that store values 1 ... n.

## Example

```example
Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
Explanation:
The above output corresponds to the 5  unique BST's shown below:

  1       3       3       2       1
   \     /       /       / \       \
    3   2       1       1   3       2
   /   /         \                   \
  2   1           2                   3
```

## Solution

```javascript
/**
 * Definition for a binary tree node.
 * @param {Number} val
 */
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
};

/**
 * @param {Number} n
 * @return {TreeNode}
 */
const generateTrees = n => {
  if (n < 1) return [];
  const dp = [...Array(n + 1)].map(_ => Array(n + 1));
  const generate = (start, end) => {
    if (start > end) return [null];
    if (dp[start][end]) return dp[start][end];
    const result = [];
    for (let root = start; root <= end; root++) {
      for (let left of generate(start, root - 1)) {
        for (let right of generate(root + 1, end)) {
          const newTree = new TreeNode(root);
          newTree.left = left;
          newTree.right = right;
          result.push(newTree);
        }
      }
    }
    dp[start][end] = result;
    return result;
  };

  return generate(1, n);
};
```
