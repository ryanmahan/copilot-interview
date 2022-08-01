// given an NXM matrix, find the shortest path from top left to bottom right
// you can ignore up to k obstacles, which are marked with 1 in the matrix

function shortestPath(grid: number[][], k: number): number {
  const queue: number[][] = [[0, 0]];
  const visited: number[][] = [[0, 0]];
  let min = Number.MAX_VALUE;
  while (queue.length) {
    const [x, y] = queue.shift();
    if (x === grid.length - 1 && y === grid[0].length - 1) {
      min = Math.min(min, visited[x][y]);
    }
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + [0, 0, 1, -1][i], y + [1, -1, 0, 0][i]];
      if (nx < 0 || nx >= grid.length || ny < 0 || ny >= grid[0].length || visited[nx][ny] <= visited[x][y] + grid[nx][ny]) {
        continue;
      }
      visited[nx][ny] = visited[x][y] + grid[nx][ny];
      if (visited[nx][ny] <= k) {
        queue.push([nx, ny]);
      }
    }
  }
  return min === Number.MAX_VALUE ? -1 : min;
}

// doesnt pass, but the logic is pretty close, BFS with some problems and NPEs