# [709. To Lower Case](https://leetcode.com/problems/to-lower-case/description/)

## Description

Implement function ToLowerCase() that has a string paramater str, and returns the same string in lowercase.

## Example 1

```javascript
Input: 'Hello'
Output: 'hello'
```

## Example 2

```javascript
Input: 'here'
output: 'here'
```

## Example 3

```javascript
Input: 'LOVELY'
Output: 'lovely'
```

```javascript
/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = (str) => {
  const result = str.split('').map(char => {
    const charAt = char.codePointAt();
    const toCharAt = (charAt >= 65 && charAt <= 90) ? charAt + 32 : charAt;
    return String.fromCodePoint(toCharAt);
  }).join('');
  return result;
};
```

I initial thought above, runtime in 52ms.

```javascript
/**
 * @param {string} char
 * @return {string}
 */
const convertChar = (char) => {
  const code = char.codePointAt();
  const toCode = (code >= 65 && code <= 90) ? code + 32 : code;
  return String.fromCodePoint(toCode);
};

/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += convertChar(str[i]);
  }
  return result;
};
```

After digging with discuss, found above, runtime in 48ms.