// given n pairs of parentheses, generate all valid combinations of parentheses
function generateParens(n: number): string[] {
  const result: string[] = [];
  generateParensHelper(n, n, '', result);
  return result;
}

function generateParensHelper(left: number, right: number, str: string, result: string[]): void {
  if (left === 0 && right === 0) {
    result.push(str);
    return;
  }
  if (left > 0) {
    generateParensHelper(left - 1, right, str + '(', result);
  }
  if (right > left) {
    generateParensHelper(left, right - 1, str + ')', result);
  }
}