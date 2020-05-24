/**
 * @param {Number} rowIndex 
 * @returns {Array<Number>}
 */
const getRow = rowIndex => {
  const generate = numRows => {
    if (numRows === 0) return [];
    const result = [];
    for (let i = 0; i < numRows; i++) {
      let currRow = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          currRow.push(1);
        } else {
          currRow.push(result[i - 1][j - 1] + result[i - 1][j]);
        }
      }
      result.push(currRow);
    }
    return result;
  };
  const triangle = generate(rowIndex + 1);
  return triangle[rowIndex];
};

const index = 3;
const row = getRow(index);
console.log(JSON.stringify(row, null, 2));