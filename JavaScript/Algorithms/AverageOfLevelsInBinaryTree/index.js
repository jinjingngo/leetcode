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
