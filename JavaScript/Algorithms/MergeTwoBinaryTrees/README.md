# [617. Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/description/)  

## Description
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.  

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged one. Otherwise, the NOT null node will be used as the node of new tree.  

## Example:
```
Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
```

## Note
The merging process must start from the root nodes of both trees.

## Solution 1
Shared TreeNode class
```javascript
class TreeNode {
	constructor (val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}
```

```javascript
/**
 * Merge Two Binary Trees
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @returns {TreeNode}
 */
const mergeTrees = (t1, t2) => {
	if (t1 === null) {
		return t2;
	}
	if (t2 === null) {
		return t1;
	}
	t1.val += t2.val;
	t1.left = mergeTrees(t1.left, t2.left);
	t1.right = mergeTrees(t1.right, t2.right);

	return t1;
};
```
This is too slow 183 / 183 test cases passed with 128ms, damn slow;

## Solution 2
```javascript
/**
 * Merge Two Binary Trees
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @returns {TreeNode}
 */
const mergeTrees = (t1, t2) => {
	if (t1 === null) {
		return t2;
	}
	if (t2 === null) {
		return t1;
	}
	const root = t1.val + t2.val;
	const newTree = new TreeNode(root);
	newTree.left = mergeTrees(t1.left, t2.left);
	newTree.right = mergeTrees(t1.right, t2.right);
	return newTree;
};
```
No effect... DAMN. Digging how to optimize.