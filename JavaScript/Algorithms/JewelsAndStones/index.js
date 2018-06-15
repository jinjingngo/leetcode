/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

let numJewelsInStones = function (J, S) {
  let count = 0;
  let jewels = J.split('');
  let stones = S.split('');
  for (let i = 0; i < stones.length; i++) {
    let stone = stones[i];
    jewels.map(function (jewel) {
      if (jewel === stone) {
        count += 1;
      }
    });
  }
  return count;
};

numJewelsInStones();
