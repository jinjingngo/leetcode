/**
 * input: matrix = [
 *  [5, 1, 9, 11],
 *  [2, 4, 8, 10],
 *  [13, 3, 6, 7],
 *  [15, 14, 12, 16]
 * ];
 *
 * firstly reverse the matrix using `Array.prototype.reverse()`
 * [
 *  [15, 14, 12, 16],
 *  [13, 3, 6, 7],
 *  [2, 4, 8, 10],
 *  [5, 1, 9, 11]
 * ];
 *
 * and then we transpose the matrix, notice the nested loop, basically we exchange the two parts:
 * right-top
 * [
 *  [ ,  ,  ,  ],
 *  [13,  ,  , ],
 *  [2, 4,  ,  ],
 *  [5, 1, 9,  ]
 * ];
 *
 * left-bottom
 * [
 *  [ , 14, 12, 16],
 *  [ ,  , 6, 7],
 *  [ ,  ,  , 10],
 *  [ ,  ,  ,  ]
 * ];
 *
 * And result
 * [
 *  [15, 13, 2, 5],
 *  [14, 3, 4, 1],
 *  [12, 6, 8, 9],
 *  [16, 7, 10, 11]
 * ]
 * @param {Array} matrix
 */
const rotate = (matrix) => {
  matrix.reverse();
  for (let i = 0, isize = matrix.length; i < isize; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
];

rotate(matrix);
console.log(JSON.stringify(matrix));
