/**
 * reshape the two-dimensional matrix
 * Use `Array.prototype.reduce()` and `Array.prototype.concat()` to flat the two-dimensional matrix into one-dimensional flated matrix.
 * Use `Array.prototype.from()` to generate a slot matrix with specified `row` and `column`.
 * Use `Array.prototype.map()` to fulfill the slot matrix using the flated matrix elements.
 * @param {Array} matrix
 * @param {Number} r
 * @param {Number} c
 * @returns {Array[r][c]}
 */
const matrixReshape = (matrix, r, c) => {
	if (!matrix || matrix.length === 0 || matrix.length > 100) {
		return matrix;
	}
	const width = matrix.length;
	const height = matrix[0].length;
	const isValid = width * height >= r * c;
	if (!isValid) {
		return matrix;
	}
	const flated = matrix.reduce((acc, val) => acc.concat(val));
	const column = Array.from({ length: c }, (v, i) => i + 1);
	const slots = Array.from({ length: r }, _ => column);
	let index = 0;
	const reshaped = slots.map(row => row.map(_ => flated[index++]));
	return reshaped;
};

const matrix = [ [1, 2], [3, 4] ];
const reshaped = matrixReshape(matrix, 4, 1);
console.log(`original: ${JSON.stringify(matrix)}`);
console.log(`reshpaed: ${JSON.stringify(reshaped)}`);
