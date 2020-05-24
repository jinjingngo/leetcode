/**
 * @param {String} s
 * @param {String} t
 * @returns {Boolean}
 */
// const isAnagram = (s, t) => {
//   if (!s || !t || s.length !== t.length) return false;
//   const sChars = [...s].sort().join('');
//   const tChars = [...t].sort().join('');
//   return sChars === tChars;
// };

const isAnagram = (s, t) => {
  if (!s || !t || s.length !== t.length) return false;
  const alphaIndex = 'a'.charCodeAt();
  const alphabet = Array.from(new Array(26), _ => 0);
  for (let c of s) {
    const index = c.charCodeAt() - alphaIndex;
    alphabet[index]++;
  }
  for (let c of t) {
    const index = c.charCodeAt() - alphaIndex;
    alphabet[index]--;
  }
  for (let i = 0, length = alphabet.length; i < length; i++) {
    if (alphabet[i] !== 0) return false;
  }
  return true;
}

const s = 'anagram';
const t = 'nagaram';
const judge = isAnagram(s, t);
console.log(judge);
