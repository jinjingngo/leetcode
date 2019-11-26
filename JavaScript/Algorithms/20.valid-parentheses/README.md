# [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

## Description

Given a string containing just the characters `'('`, `')'`, `'['`, `']'`, `'{'`, `'}'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

## Example 1

```example
Input: "()"
Output: true
```

## Example 2

```example
Input: "()[]()"
Output: true
```

## Example 3

```example
Input: "(]"
Output: false
```

## Example 4

```example
Input: "([)]"
Output: false
```

## Example 5

```example
Input: "{[]}"
Output: true
```

## Hint 1

An interesting property about a valid parenthesis expression is that a sub-expression of a valid expression should be a valid expression. (Not every sub-expression) e.g.

{ { } [ ] [ [ [ ] ] ] } is VALID expression
         [ [ [ ] ] ]    is VALID sub-expression
  { } [ ]               is VALID sub-expression
Can we exploit this recursive structure somehow?

## Hint 2

What if whenever we encounter a matching pair of parenthesis in the expression, we simply remove it from the expression? This would keep on shortening the expression. e.g.

```e.g.
{ { ( { } ) } }
      |_|
```

```e.g.
{ { (     ) } }
    |_____|
```

```e.g.
{ {         } }
  |_________|
```

```e.g.
{             }
|_____________|
```

VALID EXPRESSION!

## Hint 3

The **stack** data structure can come in handy here in representing this recursive structure of the problem. We can't really process this from the inside out because we don't have an idea about the overall structure. But, the stack can help us process this recursively i.e. from outside to inwards.

## Solution

```javascipt
const isValid = s => {
  if (s === undefined) return false;
  if (s === '') return true;
  const chars = Array.from(s[Symbol.iterator]());
  const stack = [];
  let head = 0;
  for (let char of chars) {
    switch (char) {
      case '{':
      case '[':
      case '(':
        stack[head++] = char;
        break;
      case "}":
        if (head === 0 || stack[--head] !== '{') return false;
        break;
      case "]":
        if (head === 0 || stack[--head] !== '[') return false;
        break;
      case ")":
        if (head === 0 || stack[--head] !== '(') return false;
        break;
    }
  }
  return head === 0;
};
```
