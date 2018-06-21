/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

let numJewelsInStones = function (J, S) {
  let count = 0;
  let jewels = new Map();
  for (let j of J) {
    jewels.set(j, 0);
  }
  for (let s of S) {
    if (jewels.has(s)) {
      count++;
    }
  }
  return count;
};

numJewelsInStones();
