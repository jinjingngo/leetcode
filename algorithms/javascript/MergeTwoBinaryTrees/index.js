class TreeNode {
	constructor (val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

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

const t1 = new TreeNode(1);
t1.left = new TreeNode(3);
t1.right = new TreeNode(2);
t1.left.left = new TreeNode(5);
const t2 = new TreeNode(2);
t2.left = new TreeNode(1);
t2.right = new TreeNode(3);
t2.left.right = new TreeNode(4);
t2.right.right = new TreeNode(7);
const merged = mergeTrees(t1, t2);
console.log(merged);
