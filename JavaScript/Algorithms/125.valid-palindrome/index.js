/**
 * @param {String} s
 * @return {Boolean}
 */
const isPalindrome = (s) => {
  const forward = s.replace(/\W/g, '').toLowerCase();
  const backward = [...forward].reverse().join('');
  return forward === backward;
};

const s = 'race a car';
const is = isPalindrome(s);

console.log(is);
