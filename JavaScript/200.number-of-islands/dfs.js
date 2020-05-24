/**
 * check whether the element is innner the bound through grid, i, j
 * @param {Array[Array<Number|String>]} grid
 * @param {Number} i 
 * @param {Number} j 
 */
const inbound = (grid, i, j) => {
  return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;
};

const dx = [1, 0, 0, -1];
const dy = [0, 1, -1, 0];

const helper = (grid, i, j) => {
  for (let k = 0; k < 4; k++) {
    const x = i + dx[k];
    const y = j + dy[k];
    if (inbound(grid, x, y) && grid[x][y] === '1') {
      grid[x][y] = '0';
      helper(grid, x, y);
    }
  }
};

const numIslands = grid => {
  let island = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        helper(grid, i, j);
        island++;
      }
    }
  }
  return island;
};
