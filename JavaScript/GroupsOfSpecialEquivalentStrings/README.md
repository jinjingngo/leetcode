# [893. Groups of Special-Equivalent Strings](https://leetcode.com/problems/groups-of-special-equivalent-strings/description/)

## Description

You are given an array `A` of strings.  
Two strings `S` and `T` are *special-equivalent* if after any number of *moves*, `S == T`.  
A *move* consists of choosing two indices `i` and `j` with `i % 2 == j % 2`, and swapping `S[i]` with `S[j]`.  
Now, a group of special-equivalent strings from `A` is a non-empty subset of `A` such that any string not in `S` is not special-equivalent with any string in `S`.  
Return the number of groups of special-equivalent strings from `A`.  

## Example 1

```javascript
Input: ['a', 'b', 'c', 'a', 'c', 'c']
Output: 3
Explanation: 3 groups ['a', 'a'], ['b'], ['c', 'c', 'c']
```

## Example 2

```javascript
Input: ['aa', 'bb', 'ab', 'ba']
Output: 4
Explanation: 4 groups ['aa'], ['bb'], ['ab'], ['ba']
```

## Example 3

```javascript
Input: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
Output: 3
Explanation: 3 groups ['abc', 'cba'], ['acb', 'bca'], ['bac', 'cab']
```

## Example 4

```javascript
Input: ['abcd', 'cdab', 'adcb', 'cbad']
Output: 1
Explanation: 1 group ['abcd', 'cdab', 'adcb', 'cbad']
```

## Note

- `1 <= A.length <= 1000`
- `1 <= A[i].length <= 20`
- All `A[i]` have the same length.
- All `A[i]` consist of only lowercase letters.

## Solution

```javascript
/**
 * I am practicing pure function.
 * And try to comments my function with WHY
 * @param {Array} A
 * @returns {Number}
 */
const numSpecialEquivGroups = (A) => {
  /**
   * need odd character of every element in the `A` array
   * @param {Array} A
   * @returns {Array}
   */
  const odder = (A) => {
    return A.map(w => {
      return [...w].reduce((a, c, i) => {
        return a + (i % 2 === 0 ? c : '');
      }, '');
    });
  };
  /**
   * need ever character of every element in the `A` array
   * @param {Array} A
   * @returns {Array}
   */
  const evener = (A) => {
    return A.map(w => {
      return [...w].reduce((a, c, i) => {
        return a + (i % 2 !== 0 ? c : '');
      }, '');
    });
  };
  /**
   * need to sort as the same order
   * @param {Array} list
   * @returns {Array}
   */
  const sorter = (list) => {
    return list.map(w => {
      return [...w].sort().join('');
    });
  };
  /**
   * combine `odd` and `even` array into one list,
   * Set is for unique element.
   * So that size of set is the group of special-equivalent.
   * @param {Array} odd
   * @param {Array} even
   * @returns {Set}
   */
  const combine = (odd, even) => {
    const list = odd.map((w, i) => {
      return w + even[i];
    });
    const set = new Set();
    for (let w of list) {
      set.add(w);
    }
    return set;
  };
  const odd = odder(A);
  const even = evener(A);
  const oddOrdered = sorter(odd);
  const evenOrdered = sorter(even);
  const set = combine(oddOrdered, evenOrdered);
  return set.size;
};

const incoming = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']; // ['aa', 'bb', 'ab', 'ba'];
const outcoming = numSpecialEquivGroups(incoming);
console.log(outcoming);
```