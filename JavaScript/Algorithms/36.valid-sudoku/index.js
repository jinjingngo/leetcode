/**
 * using Set
 * store digit from the row in format `${digit} in row ${row}`
 * store digit from the column in format `${digit} in row ${column}`
 * store digit from the block in formate `${digit} in block ${row / 3}-${column / 3}`
 *
 * check if the element was in set then return false, otherwise this is a valid sudoku return true.
 * @param {Array} board
 * @returns {Boolean}
 */
const isValidSudoku = (board) => {
  const seen = new Set();
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      const digit = board[i][j];
      if (isNaN(digit)) continue;
      const inRow = `${digit} in row ${i}`;
      const inColumn =  `${digit} in column ${j}`;
      const inBlock = `${digit} in block ${i / 3}-${j / 3}`;
      const hasRow = seen.has(inRow);
      const hasColumn = seen.has(inColumn);
      const hasBlock = seen.has(inBlock);
      if (!hasRow && !hasColumn && !hasBlock) {
        seen.add(inRow);
        seen.add(inColumn);
        seen.add(inBlock);
      } else {
        console.log(seen, inRow, inColumn, inBlock);
        return false;
      }
    }
  }
  return true;
};


const validBoard = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

const isValid = isValidSudoku(validBoard);
console.log(isValid); // true
