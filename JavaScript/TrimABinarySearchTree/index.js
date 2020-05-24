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
