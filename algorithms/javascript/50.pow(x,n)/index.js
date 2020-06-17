/**
 * @param {Number} x
 * @param {Number} n
 * @returns {Number}
 */
const myPow = (x, n) => {
  if (n === 0) return 1;
  if (n < 0) return 1.0 / myPow(x, -n);
  const half = myPow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return half * half;
  } else {
    return half * half * x;
  }
};

const pow = myPow(2.00000, -2);
console.log(pow);
