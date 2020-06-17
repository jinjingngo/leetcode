# [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)

## Description

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

## Example 1

```example
Input: [ "flower", "flow", "flight" ]
Output: "fl"
```

## Example 2

```example
Input: [ "dog", "racecar", "car" ]
Output: ""
```

## Note

All given inputs are in lowercase letters `a-z`

## Solution

```javascript
/**
 * longest commmon prefix
 * `recude` was design for it.
 * @param {Array} strs
 * @returns {String}
 */
const longestCommonPrefix = (strs) => {
  if (strs === undefined || strs.length === 0 ) return '';
  const common = (prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  }
  return strs.reduce(common);
};
```
