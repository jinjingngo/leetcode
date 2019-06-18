const countAndSay = (n) => {
  if (n === 1) { return '1'; }
  const say = str => {
    let idx = 0;
    let newStr = '';
    while (idx < str.length) {
      let occurences = 1;
      while (str[idx + 1] && str[idx + 1] === str[idx]) {
        idx++;
        occurences++;
      }
      newStr += occurences + str[idx];
      idx++
    }
    return newStr;
  };
  return say(countAndSay(n - 1));
};

const n = 10;
const say = countAndSay(n);
console.log(say);
