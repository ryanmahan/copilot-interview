// given a string of operators, digits, and spaces, return the result of the expression
function calculate(str: string): number {
  const stack: number[] = [];
  const operators: string[] = ['+', '-', '*', '/'];
  const digits: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const tokens = str.split('');
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (operators.includes(token)) {
      const right = stack.pop();
      const left = stack.pop();
      const result = operate(left, token, right);
      stack.push(result);
    } else if (digits.includes(token)) {
      stack.push(parseInt(token));
    }
  }
  return stack.pop();
}

function operate(left: number, operator: string, right: number): number {
  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/':
      return left / right;
  }
}

// incorrect