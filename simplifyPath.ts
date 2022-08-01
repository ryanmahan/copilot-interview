// takes a unix filesystem absolute path and converts it to a canonical path
function simplifyPath(path: string) {
  const stack: string[] = [];
  const parts = path.split('/');
  for (const part of parts) {
    if (part === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else if (part !== '.') {
      stack.push(part);
    }
  }
  return stack.join('/');
}

// this is really close! but no cigar. line 10 needs a !== '' and line 14 needs to start with '/'
// passes 24 of ~250 tests