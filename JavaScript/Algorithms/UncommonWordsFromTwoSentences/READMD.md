# [884. Uncommon Words from Two Sentences](https://leetcode.com/problems/uncommon-words-from-two-sentences/description/)

## Description
We are givin two sentences `A` and `B`. (A *scentence* is a string of space separated words. Each *word* consists only of lowercase letters.)  

A word is *uncommon* if it appears exactly once in one of the sentences, and does not appear in the other sentence.  

Return a list of all uncommon words.  

You may return the list in any order.  

## Example 1
```
Input: A = 'this apple is sweet', B = 'this apple is sour'
Output: [ 'sweet', 'sour' ]
```

## Example 2
```
Input: A = 'apple apple', B = 'banana'
Output: [ 'banana' ]
```

## Note
1. `0 <= A.length <= 200`
2. `0 <= B.length <= 200`
3. `A` and `B` both contain only spaces and lowercase letters.

## Solution
```javascript
/**
 * @param {String} A
 * @param {String} B
 * @returns {Array}
 */
const uncommonFromSentences = (A, B) => {
  // concat two strings in the same pattern (space gapped)
  const merge = A.concat(' ', B);
  const sentences = merge.split(' ');
  // filter out the common word using the indexOf function
  const common = sentences.filter((word, index, list) => list.indexOf(word) !== index);
  // filter out the uncommons using the common words through the whole sentance.
  const uncommon = sentences.filter(word => !common.includes(word));
  return uncommon;
};

const A = 'this apple is sweet';
const B = 'this apple is sour';
const umcommons = uncommonFromSentences(A, B);
console.log(umcommons);
```