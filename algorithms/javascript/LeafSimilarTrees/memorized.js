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
 * Leaf-Similar Trees
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @returns {boolean}
 */
const leafSimilar = (root1, root2) => {
	const root1Leaves = [];
	const root2Leaves = [];
	leaves(root1, root1Leaves);
	leaves(root2, root2Leaves);
	const equality = String(root1Leaves) === String(root2Leaves);
	return equality;
};

/**
 * calc leaf nodes from a binary tree
 * @param {TreeNode} node
 * @param {Array} array
 * @returns {undefined}
 */
const leaves = (node, array) => {
	// TODO
};

const root1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4];
const root2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8];
const similar = leafSimilar(root1, root2);
console.log(similar);
