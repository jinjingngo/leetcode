const acculator = (acc, v) => acc + Number(v);

/**
 * Recursionaly add every digits in the given integer until the only one digit left.
 * @param {Number} num
 * @returns {Number}
 */
const addDigits = (num) => {
  const digits = num.toString();
  if (digits.length === 1) {
    return Number(digits);
  } else {
    return addDigits(digits.split('').reduce(acculator, 0));
  }
};

/**
 * Solve with loop
 * @param {Number} num
 * @returns {Number}
 */
const addDigits = (num) => {
  let digits = num.toString();
  while (digits.length !== 1) {
    digits = digits.split('').reduce(acculator, 0).toString();
  }
  return digits;
}

/**
 * Since this is a *digit root* problem, use th congruence formula to solve it.
 * @param {Number} num
 * @returns {Number}
 */
const addDigits = (num) => 1 + (num - 1) % 9;

const digits = 32;
const result = addDigits(digits);
console.log(result);