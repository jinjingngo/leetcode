# [500. Keyboard Row](https://leetcode.com/problems/keyboard-row/description/)

## Description

Given a List of words, return the words that can be typed using letters of **alphabet** on only one row's of American keyboard like the image blow.
![American keyboard](http://pc97r6al4.bkt.clouddn.com/American%20keyboard.png)

## Example

```javascript
Input: [ 'Hello', 'Alaska', 'Dad', 'Peace' ]
Output: [ 'Alaska', 'Dad' ]
```

## Note

1. You may use one character in the keyboard more than once.
2. You may assume the input string will only contain letters of alphabet.

## Solution 1

```javascript
/**
 * @param {Array} words
 * @returns {Array}
 */
const findWords = (words) => {
  const rows = [
    [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ],
    [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ],
    [ 'z', 'x', 'c', 'v', 'b', 'n', 'm' ]
  ];
  const rule = (word, rows) => {
    const letters = word.toLowerCase().split('');
    const first = letters[0];
    const inRow = rows.filter(row => row.includes(first))[0];
    const differentRow = letters.every(letter => inRow.includes(letter));
    return differentRow;
  };
  const matches = words.filter(word => rule(word, rows));
  return matches;
};

const words = [ 'Hello', 'Alaska', 'Dad', 'Peace' ];
const sameRow = findWords(words);
console.log(sameRow);
```

## Solution 2

```javascript
/**
 * @param {Array} words
 * @returns {Array}
 */
const findWords = (words) => {
  const rows = [
    [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ],
    [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ],
    [ 'z', 'x', 'c', 'v', 'b', 'n', 'm' ]
  ];
  const rule = (word, rows) => {
    const letters = word.toLowerCase().split('');
    const first = letters.shift();
    const inRow = rows.filter(row => row.includes(first)).shift();
    const differentRow = letters.some(letter => !inRow.includes(letter));
    return !differentRow;
  };
  const matches = words.filter(word => rule(word, rows));
  return matches;
};

const words = [ 'Hello', 'Alaska', 'Dad', 'Peace' ];
const sameRow = findWords(words);
console.log(sameRow);
```

Some improvement with native array method.
