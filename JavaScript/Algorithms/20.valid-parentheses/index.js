const isValid = s => {
  if (s === undefined) return false;
  if (s === '') return true;
  const chars = Array.from(s[Symbol.iterator]());
  const stack = [];
  let head = 0;
  for (let char of chars) {
    switch (char) {
      case '{':
      case '[':
      case '(':
        stack[head++] = char;
        break;
      case "}":
        if (head === 0 || stack[--head] !== '{') return false;
        break;
      case "]":
        if (head === 0 || stack[--head] !== '[') return false;
        break;
      case ")":
        if (head === 0 || stack[--head] !== '(') return false;
        break;
    }
  }
  return head === 0;
};

const str = '{ c { ( a { b} } ) } d }';

const valid = isValid(str);
console.log(valid)
