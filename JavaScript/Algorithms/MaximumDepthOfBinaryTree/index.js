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
