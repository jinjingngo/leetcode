# [637. Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/description/)

## Description  

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

## Example

```code
Input:
  3
 / \
9  20
  /  \
 15   7

Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
```

## Note

1. The range of node's value is in the rande of 32-bit signed integer

## Solution

```javascript
class TreeNode {
  constructor (val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * Calculate the average of each level in binary tree.
 * pre-order DFS usage.
 * @param {TreeNode} root
 * @param {Number} level
 * @param {Array} counts
 * @returns {Array}
 */
const averageOfLevels = (root, level = 0, counts = []) => {
  if (!root) {
    return [];
  }
  counts[level] = counts[level] || { sum: 0, nodes: 0 };
  counts[level].sum += root.val;
  counts[level].nodes++;
  averageOfLevels(root.left, level + 1, counts);
  averageOfLevels(root.right, level + 1, counts);
  return level || counts.map(count => count.sum / count.nodes);
};

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);
const average = averageOfLevels(tree);
console.log(JSON.stringify(average));
```