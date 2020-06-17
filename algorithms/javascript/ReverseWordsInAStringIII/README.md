# [557. Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii/description/)

## Description

Given a string, you need to reverse to order of characters in each word within a sentence while still preserving whitespace and initial word order.  

## Example

```javascript
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```

## Note

In the string, each word is separated by single space and there will not be any extra space in the string.  

## Solution

```javascript
const reverseWords = (s) => {
  let result = s.split(' ');
  result = result.map(word => {
    let letters = word.split('');
    letters = letters.reverse();
    return letters.join('');
  });
  return result.join(' ');
};
```

1. split the string by single whitespace into an array;
2. map single words' array
3. split each word by empty string into letters array;
4. reverse the order of each word;
5. return each word in reverse order;
6. finally return the reversed string;