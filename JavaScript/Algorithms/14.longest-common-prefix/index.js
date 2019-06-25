/**
 * longest commmon prefix
 * `recude` was design for it.
 * @param {Array} strs
 * @returns {String}
 */
const longestCommonPrefix = (strs) => {
  if (strs === undefined || strs.length === 0 ) return '';
  const common = (prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  }
  return strs.reduce(common);
};

const strs = [ "flower", "flow", "flight" ];
const prefix = longestCommonPrefix(strs);
console.log(prefix);
