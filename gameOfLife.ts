// simulates the next step in Conway's Game of Life
// the game is a grid of cells
// edit the grid to change the state of the cells
function next(grid: number[][]): number[][] {
  const nextGrid: number[][] = [];
  for (let i = 0; i < grid.length; i++) {
    nextGrid.push([]);
    for (let j = 0; j < grid[0].length; j++) {
      const neighbors = countNeighbors(grid, i, j);
      if (grid[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {
        nextGrid[i].push(0);
      } else if (grid[i][j] === 0 && neighbors === 3) {
        nextGrid[i].push(1);
      } else {
        nextGrid[i].push(grid[i][j]);
      }
    }
  }
  grid = nextGrid;
  return nextGrid;
}

function countNeighbors(grid: number[][], i: number, j: number): number {
  let count = 0;
  for (let x = i - 1; x <= i + 1; x++) {
    for (let y = j - 1; y <= j + 1; y++) {
      if (x === i && y === j) {
        continue;
      }
      if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
        continue;
      }
      count += grid[x][y];
    }
  }
  return count;
}

