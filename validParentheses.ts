// check if the input string has valid parentheses
// https://leetcode.com/problems/valid-parentheses/

// the below failed

function valid(s: string) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else if (s[i] === ')') {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

// check if the input string has valid parentheses, square brackets, and curly braces
// https://leetcode.com/problems/valid-parentheses/
function valid(s: string) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
      if (stack.length === 0) {
        return false;
      }
      const last = stack.pop();
      if (last === '(' && s[i] !== ')') {
        return false;
      }
      if (last === '[' && s[i] !== ']') {
        return false;
      }
      if (last === '{' && s[i] !== '}') {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// copilot passed this once I described the problem better