/**
 * 32-bit signed integer range: [−231,  231 − 1]
 */
const reverse = (x) => {
  const reverser = x => Number(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
  const reversed = reverser(x);
  return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
}

const x = 1534236469;
const rx = reverse(x);
console.log(rx); // 0
