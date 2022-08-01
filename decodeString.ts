// decodes an encoded string into the original string
// 2[a] => aa
// 2[3[n]] => nnnnnnn
function decodesString(encoded: string) {
  const stack: string[] = [];
  for (const char of encoded) {
    if (char === '[') {
      stack.push(char);
    } else if (char === ']') {
      let num = '';
      while (stack.length > 0 && stack[stack.length - 1] !== '[') {
        num = stack.pop() + num;
      }
      if (stack.length > 0) {
        stack.pop();
      }
      for (let i = 0; i < parseInt(num); i++) {
        stack.push(char);
      }
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
}

// not close, this is a hard problem to describe