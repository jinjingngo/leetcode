/**
 * In an alien language, surprisingly they also use english lowercase, but possibly in a different `order`.
 * The `order` of the alphabet is some permutation of lowercase letters.
 *
 * Given a sequence of `words` written in the alien language, and the `order` of the alphabet, 
 * return `true` if and only if the given `words` are sorted lexicographicaly in this alien language.
 * @param {Array} words
 * @param {Strig} order
 * @returns {Boolean}
 */
const isAlienSorted = (words, order) => {
  const dic = [...order].reduce((d, char, i) => (d[char] = i, d),{});
    
  const compare = (a, b) => {
    if (a === b) return true;
    for (let i = 0; i < a.length && i < b.length; i++) {
      if (dic[a[i]] !== dic[b[i]]) return dic[a[i]] > dic[b[i]]
    }
    return a.length > b.length;
  }
  
  for (let i = 1; i < words.length; i++) {
    if (!compare(words[i], words[i-1])) return false;
  }
  return true;
}

// const words = ['hello', 'leetcode'];
// const order = 'hlabcdefgijkmnopqrstuvwxyz';
const words = ['word', 'world', 'row'];
const order = 'worldabcefghijkmnpqstuvxyz';
const is = isAlienSorted(words, order);
console.log(is);