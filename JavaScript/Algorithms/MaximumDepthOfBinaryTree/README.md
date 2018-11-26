# [104. Maximum Deepth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)

## Description
Given a binary tree, find its maximum depth.  

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.  

## Note
A leaf is a node with no children

## Example
Given a binary tree `[3, 9, 20, null, null, 15, 7]`
```
	3
 / \
9  20
  /  \
 15   7
```

return its depth = 3


## Solution
```javascript
class TreeNode {
	constructor (val) {
		this.val = val;
		this.left = this.right = null;
	}
}

/**
 * Caculate the maximum depth, aka the longest path
 * classical binary tree depth problem
 * @param {TreeNode} root
 * @returns {Number}
 */
const maxDepth = (root) => {
	if (root === null) {
		return 0;
	}
	const left = maxDepth(root.left);
	const right = maxDepth(root.right);
	return Math.max(left, right) + 1;
};

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);
const max = maxDepth(tree);
console.log(max);
```