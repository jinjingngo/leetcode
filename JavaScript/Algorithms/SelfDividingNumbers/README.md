# [728.](https://leetcode.com/problems/self-dividing-numbers/description/)

## Description
A *self-dividing number* is a number that is divisible by every digit it contains.  
For example, 128 is a self-dividing number because `128 % 1 == 0`, `128 % 2 == 0`, and `128 % 8 == 0`.  
Also, a self-dividing number is note allowed to contain the digit zero.  
Given a lower and upper nubmer bound, output a list of every possible self dividing number, include the bounds if possible.  

## Example 1:
```
Input: left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
```

## Note
- The boundaries of each input argument are `1 <= left <= right <= 10000`.

## Solution 1
```javascript
const selfDividingNumbers = (left, right) => {
	const list = [];
	for (let i = left; i <= right; i++) {
		const digits = i.toString().split('');
		let divid = false;
		if (digits.includes('0')) {
			continue;
		}
		digits.forEach(digit => {
			divid = i % Number(digit) === 0 ? true : false;
		});
		if (divid) {
			list.push(i);
		}
	}
	return list;
};

const left = 1;
const right = 22;
const list = selfDividingNumbers(left, right);
console.log(list);
```
Output is  
```
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 21, 22 ]
```
Apperently, 21 is not a self-dividing number, wrong solution.  
Because the result of the tenary `divid = i % Number(digit) === 0 ? true : false;` always based on calculate of the last digit.  

## Solution 2
```javascript
const selfDividingNumbers = (left, right) => {
	const list = [];
	for (let i = left; i <= right; i++) {
		const digits = i.toString().split('');
		const divied = digits.every(bit => i % parseInt(bit) === 0);
		if (divied) {
			list.push(i);
		}
	}
	return list;
};
```
Output is  
```
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 21, 22 ]
```
This time it pass all the test, but through using `every` prototype function, what about functional programming for this problem?

