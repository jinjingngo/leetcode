/**
 * @param {number} N
 * @param {number} K
 * @returns {number}
 */
const kthGrammar = (N, K) => {
  const binary = (K - 1).toString(2).split('');
  const ones = binary.reduce((count, bit) => {
    count += Number(bit);
    return count;
  }, 0);
  return ones & 1;
};

const kth = kthGrammar(2, 1);
console.log(kth);
