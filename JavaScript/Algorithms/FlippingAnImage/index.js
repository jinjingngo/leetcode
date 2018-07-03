/**
 * @param {number[][]} A
 * @return {number[][]}
 */

const flipAndInvertImage = function (A) {
  const reverse = A.map(function (element) {
    return element.reverse();
  });
  const invert = reverse.map(function (element) {
    return element.map(function (single) {
      return Number(!single);
    });
  });
  return invert;
};

const A = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];

const invert = flipAndInvertImage(A);
console.log(invert);
