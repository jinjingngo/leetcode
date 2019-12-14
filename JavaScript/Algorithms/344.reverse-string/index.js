const reverseString = s => {
  const length = s.length;
  if (length <= 1) return s;
  const leftHalf = s.slice(0, length / 2);
  const rightHalf = s.slice(length / 2, length);
  return reverseString(rightHalf) + reverseString(leftHalf);
};

const hello = [ 'h', 'e', 'l', 'l', 'o' ];
const reversed = reverseString(hello);
console.log(reversed);