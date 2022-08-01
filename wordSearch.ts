// given an MxN board of characters and a string, return true if the string can be found in the board
function findString(board: string[][], str: string): boolean {
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (findStringHelper(board, str, i, j)) {
        return true;
      }
    }
  }
  return false;
}

function findStringHelper(board: string[][], str: string, i: number, j: number): boolean {
  if (str.length === 0) {
    return true;
  }
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return false;
  }
  if (board[i][j] !== str[0]) {
    return false;
  }
  const temp = board[i][j];
  board[i][j] = '#';
  const found = findStringHelper(board, str.slice(1), i + 1, j) ||
    findStringHelper(board, str.slice(1), i - 1, j) ||
    findStringHelper(board, str.slice(1), i, j + 1) ||
    findStringHelper(board, str.slice(1), i, j - 1);
  return found;
}

// 65/84 pass