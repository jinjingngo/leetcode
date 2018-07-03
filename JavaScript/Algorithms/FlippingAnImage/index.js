/**
 * @param {number[][]} A
 * @return {number[][]}
 */

const flipAndInvertImage = function (A) {
  const invert = A.map(function (element) {
    element = element.reverse();
    return element.map(function (single) {
      return Number(!single);
    });
  });
  return invert;
};

const A = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];

const invert = flipAndInvertImage(A);
console.log('I: ', A);
console.log('O: ', invert);
