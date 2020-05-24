/**
 * Algorithm
 * 1: Search though our grid for 1's
 * 2: Determine for two direction (down, right) if it is a 1
 * 3: the answer is islands * 4 - neighbour * 2
 * @param {Array} grid
 */
const islandPerimeter = (grid) => {
	if (grid.length === 0) {
		return 0;
	}
	const height = grid.length;
	const width = grid[0].length;
	let islands = 0;
	let neighbours = 0;
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (grid[i][j] === 1) {
				islands++;
				// count down neighbours
				if (i < height - 1 && grid[i + 1][j] === 1) {
					neighbours++;
				}
				// count rignt neighbours
				if (j < width - 1 && grid[i][j + 1] === 1) {
					neighbours++;
				}
			}
		}
	}
	return islands * 4 - neighbours * 2;
};

const grid = [
	[0, 1, 0, 0],
	[1, 1, 1, 0],
	[0, 1, 0, 0],
	[0, 1, 0, 0]
];

const perimeter = islandPerimeter(grid);
console.log(perimeter);
