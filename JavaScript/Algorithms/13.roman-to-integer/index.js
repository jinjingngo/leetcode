/**
 * @param {String} s 
 * @returns {Number}
 */
const romanToInt = s => {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  const integer = [ ...s ].reduce((holder, char, index) => {
    const current = map[char];
    const next = map[s[index + 1]];
    return holder + (current < next ? -current : current);
  }, 0);
  return integer;
};