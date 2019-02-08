/**
 * Description
 * 
 * Given an integer, write a function to determine if it is a power of three.
 * 
 * Example 1
 * 
 * ```javascript
 * Input: 27
 * Output: true
 * Explanation: 3^3 = 27
 * ```
 * 
 * Example 2
 * 
 * ```javascript
 * Input: 0
 * Output: false
 * ```
 * 
 * Example 3
 * 
 * ```javascript
 * Input: 9
 * Output: true
 * ```
 * 
 * Example 4
 * 
 * ```javascript
 * Input: 45
 * Output: false
 * ```
 * @param {Number} n
 * @returns {Boolean}
 */
const isPowerOfThree = (n) => {
  if (n < 1) {
    return false;
  } else if (n === 1) {
    return true;
  } else {
    return isPowerOfThree(n /= 3);
  }
}

const nine = 9;
const isNineThePower = isPowerOfThree(nine);
console.log(nine);
