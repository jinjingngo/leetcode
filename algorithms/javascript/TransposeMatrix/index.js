/**
 * @param {number[][]} A
 * @returns {number[][]}
 */

const transpose = function (A) {
  const result = new Array(A[0].length);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(A.length);
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = A[j][i];
    }
  }

  return result;
};

const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
];

const TR = transpose(A);
console.log(TR);
