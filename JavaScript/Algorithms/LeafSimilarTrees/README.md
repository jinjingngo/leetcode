# (872. Leaf-Similar Trees)[https://leetcode.com/problems/leaf-similar-trees/description/]

## Description
Consider all the leaves of a binary tree. From left to right order, the value of those leaves form a *leaf value sequence*
![Tree](http://pc97r6al4.bkt.clouddn.com/tree.png)

For example, in the given tree above, the leaf value sequence is `(6, 7, 4, 9, 8)`.  

Two binary trees are considered *leaf-similar* if their leaf value sequence is the same.  

Return `true` if and only if the two given trees with head nodes `root1` and `root2` are leaf-similar.  

## Note
- Both of the given trees will have between `1` and `100` nodes. 

## Solution 1
```javascript
/**
 * Definition for a binary tree node.
 */
class TreeNode {
	constructor (val) {
		this.val = val;
		this.left = this.right = val;
	}
}
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @returns {boolean}
 */
const leafSimilar = (root1, root2) => {
	const root1Leaves = [];
	const root2Leaves = [];
	leaves(root1, root1Leaves);
	leaves(root2, root2Leaves);
	const equality = JSON.stringify(root1Leaves) === JSON.stringify(root2Leaves);
	return equality;
};

/**
 * calc leaf nodes from a binary tree
 * @param {TreeNode} node
 * @param {Array} array
 */
const leaves = (node, array) => {
	if (!node.left && !node.right) {
		array.push(node.val);
	}
	if (node.left) {
		leaves(node.left, array);
	}
	if (node.right) {
		leaves(node.right, array);
	}
};

const root1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4];
const root2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8];
const similar = leafSimilar(root1, root2);
console.log(similar);
```

Since there is a recursive, it can be replace with dynamic programming.  

Here is solution 2  

## Solution 2
```javascript

```
