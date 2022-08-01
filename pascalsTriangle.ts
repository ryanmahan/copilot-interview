// return the first N lines from pascals triangle
function pascal(n: number): number[][] {
  let result: number[][] = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        result[i].push(1);
      } else {
        result[i].push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
  }
  return result;
}