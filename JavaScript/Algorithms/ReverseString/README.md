# [344. Reverse String](https://leetcode.com/problems/reverse-string/description/)

## Description
Write a function that takes a string as input and returns the string reversed.

## Example 1
```
Input: 'hello'
Output: 'olleh'
```

## Example 2
```
Input: 'A man, a plan, a canal: Panama'
Output: 'amanaP :lanac a ,nalp a ,nam A'
```

## Solution
```javascript
/**
 * Reverse String takes a string as input and returns the string reversed
 * @param {string} s
 * @returns {string}
 */
const reverseString = (s) => {
	return s.split('').reverse().join('');
};
```
simple array manipulation.