/**
 * reduce the string into a map which key's are the index of each char's unicode index, values are the increasing number based on each chars frequency
 * filter out the only 1 times chars
 * shift out the first element of array, cause map store that in the setted order.
 * if got no key shifted out return -1 otherwise return the index of the shifted out key which transform into letter using `String.fromCharCode()`
 * @param {String} s
 * @return {Number}
 */
const firstUniqChar = (s) => {
  const begin = 'a'.charCodeAt();
  const frequency = [...s].reduce((freq, c) => {
    const key = c.charCodeAt() - begin;
    const has = freq.has(key);
    let seed = has ? freq.get(key) + 1 : 1;
    freq.set(key, seed);
    return freq;
  }, new Map());
  const uniques = Array.from(frequency.entries()).filter(([_, times]) => times === 1);
  const firstCharKey = uniques.length && uniques.shift().shift() + begin;
  return firstCharKey ? s.indexOf(String.fromCharCode(firstCharKey)) : -1;
};

const s = 'leetcode';
const uniqueIndex = firstUniqChar(s);
console.log(uniqueIndex);
