# [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)

## Description

Given two strings `s` and `t`, write a function to determine if `t` is an anagram of `s`.

## Example 1

```example
Input: s = "anagram", t = "nagaram"
Output: true
```

## Example 2

```example
Input: s = "rat", t = "cat"
Output: false
```

## Note

You may assume the string contains only lowercase alphabets.

## Follow up

What if the inputs contain unicode characters? Hou would you adapt you solution to such case?

## Solution 1

With single order solution

```javascript
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const sChars = [...s].sort().join('');
  const tChars = [...t].sort().join('');
  return sChars === tChars;
};
```

## Solution 2

With String iterator solution

```javascript
const isAnagram = (s, t) => {
  if (!s || !t || s.length !== t.length) return false;
  const alphaIndex = 'a'.charCodeAt();
  const alphabet = Array.from(new Array(26), _ => 0);
  for (let c of s) {
    const index = c.charCodeAt() - alphaIndex;
    alphabet[index]++;
  }
  for (let c of t) {
    const index = c.charCodeAt() - alphaIndex;
    alphabet[index]--;
  }
  for (let i = 0, length = alphabet.length; i < length; i++) {
    if (alphabet[i] !== 0) return false;
  }
  return true;
}
```
