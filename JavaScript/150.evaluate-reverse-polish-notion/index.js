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