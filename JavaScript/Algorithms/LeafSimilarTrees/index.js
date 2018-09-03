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
