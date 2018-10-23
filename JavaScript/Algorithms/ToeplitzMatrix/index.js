/**
 * @param {Number[][]} matrix
 * @return {Boolean}
 */
const isToeplitzMatrix = (matrix) => {
	for (let i = 0; i < matrix.length - 1; i++) {
		for (let j = 0; j < matrix[0].length - 1; j++) {
			if (matrix[i][j] !== matrix[i + 1][j + 1]) {
				return false;
			}
		}
	}
	return true;
};

const matrix = [
	[1, 2, 3, 4],
	[5, 1, 2, 3],
	[9, 5, 1, 2]
];
const judge = isToeplitzMatrix(matrix);
console.log(matrix);
console.log(judge);
