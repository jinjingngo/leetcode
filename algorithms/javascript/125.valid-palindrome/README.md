# [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

## Description

Given a string, determine if it is a palindrome, considering only alphanumberic characters and ignoring cases.

## Note

For the purpose of this problem, we define empth string as valid palindrome.

## Example 1

```example
Input: "A man, a plan, a canal: Panama"
Output: true
```

## Example 2

```example
Input: "race a car"
output: false
```

## Solution

With JavaScript Array, things get easy.

```javascript
/**
 * @param {String} s
 * @return {Boolean}
 */
const isPalindrome = (s) => {
  const forward = s.replace(/\W/g, '').toLowerCase();
  const backward = [...forward].reverse().join('');
  return forward === backward;
};
```
