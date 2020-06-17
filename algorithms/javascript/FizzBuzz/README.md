# [412. Fizz Buzz](https://leetcode.com/problems/fizz-buzz/description/)

## Description

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output "Fizz" instead of the number and for the multiples of five output "Buzz". For numbers which are multiples of both three and five output FizzBuzz.

## Example

```javascript
n = 15;
Return:
[
  '1',
  '2',
  'Fizz',
  '4',
  'Buzz',
  'Fizz',
  '7',
  '8',
  'Fizz',
  'Buzz',
  '11',
  'Fizz',
  '13',
  '14',
  'FizzBuzz'
]
```

## Solution

```javascript
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
```