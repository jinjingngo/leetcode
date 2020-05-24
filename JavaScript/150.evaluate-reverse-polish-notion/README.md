# [150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

## Description

Evaluate the value of an arithmetic expression in [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation).

Valid operators are `+`, `-`, `*`, `/`. Each operand may be an integer or another expression.

## Note

- Division between two integers should truncate toward zero.
- The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.

## Example 1

```e.g.
Input: [ '2', '1', '+', '3', '*' ]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```

## Example 2

```e.g.
Input: [ '4', '13', '5', '/', '+' ]
Output: 6
Explanation: (4 + (13 / 5)) = 6
```

## Example 3

```e.g.
Input: [ '10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+' ]
Output: 22
Explanation:
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -123)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

## Solution

```javascript
const evalRPN = tokens => {
  const evaluate = (x, y, op) => {
    const map = {
      '+': (x, y) => x + y,
      '-': (x, y) => x - y,
      '*': (x, y) => x * y,
      '/': (x, y) => x / y | 0
    };
    return map[op](x, y);
  }
  const stack = [];

  // If the token is an operator, the operands will be
  // the last two items on the stack.
  // Evaluate the expression then add the value back on the stack,
  // as it will be the operand for the next expression.
  // Otherwise, its and operand (digit). Case to number and add to stack.
  tokens.forEach(token => {
    if (/^[+\-*/]$/.test(token)) {
      const [ y, x ] = [ stack.pop(), stack.pop() ];
      const result = evaluate(x, y, token);
      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  });
  // The last evaluated expression is the answer
  return stack.pop();
};

const tokens = [ '10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+' ];
const result = evalRPN(tokens);

console.log(result); // 22
```
