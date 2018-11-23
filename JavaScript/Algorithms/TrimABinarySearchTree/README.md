# [669. Trim a Binary Serch Tree](https://leetcode.com/problems/trim-a-binary-search-tree/description/)

## Description
Given a binary search tree and the lowest and highest boundaries as `L` and `R`, trim the tree so that all its elements lies in `[L, R]` (R > L). You might need to change the root of the tree, so the result should return the new root of the trimmed binary search tree.

## Example 1
```
Input:
	1
 / \
0		2

L = 1
R = 2

Output:
1
 \
  2
```

## Example 2
```
Input:
	3
 / \
0		4
 \
  2
 /
1

L = 1
R = 3

Output:
		3
	 /
	2
 /
1
```

## Solution
```javascript
class TreeNode {
	constructor (val) {
		this.val = val;
		this.left = this.right = null;
	}
}
/**
 * Trim the binary search tree with the given lowest and highest boundariesas `L` and `R`.
 * classical binary search usage
 * @param {TreeNode} root
 * @param {Number} L
 * @param {Number} R
 * @returns {TreeNode}
 */
const trimBST = (root, L, R) => {
	if (root === null) {
		return null;
	}
	if (root.val < L) {
		return trimBST(root.right, L, R);
	}
	if (root.val > R) {
		return trimBST(root.left, L, R);
	}

	root.left = trimBST(root.left, L, R);
	root.right = trimBST(root.right, L, R);
	return root;
};

const tree = new TreeNode(1);
tree.left = new TreeNode(0);
tree.right = new TreeNode(2);
const L = 1;
const R = 2;
const trimmed = trimBST(tree, L, R);
console.log(JSON.stringify(trimmed));
```