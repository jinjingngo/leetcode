/**
 * Generate Fizz Buzz of given length.
 * Use `Array.prototype.from()` generate an array seed of given length, fill with index + 1.
 * Use `Array.prototype.map()`  to map out the Fizz Buzz;
 * @param {Number} n
 * @returns {Array}
 */
const fizzBuzz = (n) => {
	const seed = Array.from({ length: n }, (v, i) => i + 1);
	const result = seed.map(val => val % 15 === 0 ? 'FizzBuzz' : val % 5 === 0 ? 'Buzz' : val % 3 === 0 ? 'Fizz' : val.toString());
	return result;
};

const n = 25;
const result = fizzBuzz(n);
console.log(JSON.stringify(result));
