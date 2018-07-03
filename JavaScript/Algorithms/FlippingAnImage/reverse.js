/**
 * half of interactive way
 * I don't like the recursive way
 * @param {nubmer[]} asc
 * @return {number[]}
 */
const reverse = function (asc) {
  const reverse = asc.slice();
  const count = asc.length;
  for (let i = 0; i * 2 < count; i++) {
    const start = reverse[i];
    const endIndex = count - i - 1;
    reverse[i] = reverse[endIndex];
    reverse[endIndex] = start;
  }
  return reverse;
};

const asc = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const desc = reverse(asc);
console.log('I', asc);
console.log('O', desc);
