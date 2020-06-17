const reverseBits = n => {
  let result = 0;
  let count = 32;

  while (count--) {
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }
  return result;
};

const n = 11111111111111111111111111111101;
const result = reverseBits(n);