/**
 * using Set
 * store digit from the row in format `${digit} in row ${row}`
 * store digit from the column in format `${digit} in row ${column}`
 * store digit from the block in formate `${digit} in block ${Math.floor(row / 3)}-${Math.floor(column / 3)}`
 *
 * check if the element was in set then return false, otherwise this is a valid sudoku return true.
 * @param {Array} board
 * @returns {Boolean}
 */
const isValidSudoku = board => {
  const seen = new Set();
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      const digit = board[i][j];
      if (isNaN(digit)) continue;
      const inRow = `${digit} in row ${i}`;
      const inColumn = `${digit} in column ${j}`;
      const inBlock = `${digit} in block ${Math.floor(i / 3)}-${Math.floor(j / 3)}`;
      const hasRow = seen.has(inRow);
      const hasColumn = seen.has(inColumn);
      const hasBlock = seen.has(inBlock);
      if (hasRow || hasColumn || hasBlock) return false;
      seen.add(inRow);
      seen.add(inColumn);
      seen.add(inBlock);
    }
  }
  return true;
};

const validBoard = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."]
];

const isValid = isValidSudoku(validBoard);
console.log(isValid); // true
