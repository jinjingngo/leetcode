# [953. Verifying an Alien Dictionary](https://leetcode.com/problems/verifying-an-alien-dictionary/)

## Description

In an alien language, surprisingly they also use english lowercase, but possibly in a different `order`.
The `order` of the alphabet is some permutation of lowercase letters.

Given a sequence of `words` written in the alien language, and the `order` of the alphabet, return `true` if and only if the given `words` are sorted lexicographicaly in this alien language.

## Example 1

```javascript
Input: words = ['hello', 'leetcode'], order = 'hlabcdefgijkmnopqrstuvwxyz';
Output: true
Explanation: As `h` comes before `l` in this language, then the sequence is sorted.
```

## Example 2

```javascript
Input: words = ['word', 'world', 'row'], order = 'worldabcefghijkmnpqstuvxyz'
Output: false
Explanation: As `d` comes after `l` in this language, then words[0] > words[1], hence the dequence is unsorted.
```

## Example 3

```javascript
Input: words = ['apple', 'app'], order = 'abcdefghijklmnopqrstuvwxyz'
Output: false
Explanation: The first three characters `app` match, and the second string is shorter (in size.)According to lexicographical rules `apple` > `app`, because `l` > `∅`, where `∅` is defined as the blank character which is less than any other character [More Info](https://en.wikipedia.org/wiki/Lexicographical_order)
```

## Note

1. `1 <= words.length <= 100`
2. `1 <= words[i].length <= 20`
3. `order.length === 26`
4. All characters in `words[i]` and `order` are english lowercase letters.

## Solution

```javascript
/**
 * In an alien language, surprisingly they also use english lowercase, but possibly in a different `order`.
 * The `order` of the alphabet is some permutation of lowercase letters.
 *
 * Given a sequence of `words` written in the alien language, and the `order` of the alphabet, 
 * return `true` if and only if the given `words` are sorted lexicographicaly in this alien language.
 * @param {Array} words
 * @param {Strig} order
 * @returns {Boolean}
 */
const isAlienSorted = (words, order) => {
  const dic = [...order].reduce((d, char, i) => (d[char] = i, d),{});
  const compare = (a, b) => {
    if (a === b) return true;
    for (let i = 0; i < a.length && i < b.length; i++) {
      if (dic[a[i]] !== dic[b[i]]) return dic[a[i]] > dic[b[i]]
    }
    return a.length > b.length;
  }
  
  for (let i = 1; i < words.length; i++) {
    if (!compare(words[i], words[i-1])) return false;
  }
  return true;
}

// const words = ['hello', 'leetcode'];
// const order = 'hlabcdefgijkmnopqrstuvwxyz';
const words = ['word', 'world', 'row'];
const order = 'worldabcefghijkmnpqstuvxyz';
const is = isAlienSorted(words, order);
console.log(is);
```