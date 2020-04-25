# [394. Decode String](https://leetcode.com/problems/decode-string/)

## Description

Given an encoded string, return its decoded string.

The encoding rule is `k[encoded_string]`, where the *encoded_string* inside the square brackets is being repeated exactly *k* times. Note *k* is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, *k*. For example, there won't be input like `3a` or `2[4]`.

## Example

```e.g.
s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
```

## Solution

```javascript
const decodeString = s => {
  let multiply = [];
  let tempMult = '';
  const repeatStr = [];
  let solution = '';

  for (let char of s) {

    if (!isNaN(char)) {
      tempMult = `${tempMult}${char}`;
    } else if (char === '[') {
      multiply.push(tempMult);
      tempMult = '';

      repeatStr.push(solution);
      solution = '';
    } else if (char === ']') {
      solution = repeatStr.pop() + solution.repeat(multiply.pop())
    } else {
      solution += char;
    }
  }
  return solution;
}
```
