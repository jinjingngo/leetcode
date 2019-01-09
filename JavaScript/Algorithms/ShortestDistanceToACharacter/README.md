# [821. Shortest Distance to a Character](https://leetcode.com/problems/shortest-distance-to-a-character/description/)

## Description

Given a string `S` character a character `C`, return an array of integers representing the sortest distance from the character `C` in the string.  

## Example

```javascript
Input: S = 'loveleetcode', C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
```

## Note

1. `S` string length is `[1, 10000]`.
2. `C` is a single character, and guaranteed to be in string `S`.
3. All letters in `S` and `C` are lowercase.

## Solution

```javascript
const shortestToChar = (S, C) => {
  let distances = [];
  let cPointer = -1;
  // calc left
  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) === C) {
      cPointer = i;
    }
    if (cPointer < 0) {
      distances.push(S.length);
    } else {
      distances.push(i - cPointer);
    }
  }
  // calc right
  cPointer = -1;
  for (let i = S.length - 1; i >= 0; i--) {
    if (S.charAt(i) === C) {
      cPointer = i;
    }
    if (cPointer >= 0) {
      distances[i] = Math.min(distances[i], cPointer - i);
    }
  }
  return distances;
};

const S = 'loveleetcode';
const C = 'e';
const result = shortestToChar(S, C);
console.log(result);
```

Calculate two times from both side of string `S`,  
compare each times and get the min distance.