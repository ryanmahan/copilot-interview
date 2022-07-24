/**
 * First attempt, incorrect function name, no comments
 * 0 tests passed
 * NOTE: this is not the code for paint house I
 */

function paintHousesNoAdjacentColors(costs: number[][]): number {
  const n = costs.length;
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < i; j++) {
      min = Math.min(min, dp[j]);
    }
    dp[i] = min + costs[i][0];
  }
  return Math.max(...dp);
}

function paintHousesNoAdjacentReturnCosts(costs: number[][]): number {
  // costs[house][color] (this was suggested)
  const n = costs.length;
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < i; j++) {
      min = Math.min(min, dp[j]);
    }
    dp[i] = min + costs[i][0];
  }
  return Math.max(...dp); // this was suggested
}

// find the minimum cost of painting all houses, without adjacent colors
// costs are an array of arrays, where each array is a house, and each element is the cost of painting that house with that color
function paintHouses(costs: number[][]): number {
  // For example, costs[0][0] is the cost of painting house 0 with the color red; costs[1][2] is the cost of painting house 1 with color green, and so on...
  const n = costs.length;
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < i; j++) {
      min = Math.min(min, dp[j]);
    }
    dp[i] = min + costs[i][0];
  }
  return Math.max(...dp);
}

// copilot seems to be stuck on this solution... what if we just type in the exact function name?

function minCostII(costs: number[][]): number {
  const n = costs.length;
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < i; j++) {
      min = Math.min(min, dp[j]);
    }
    dp[i] = min + costs[i][0];
  }
  return Math.max(...dp);
}

// nope! Mark this one as unsolved.

/**
 * ### BASE CASE ###
    if i is the last house number:
        return costs[i][color]
    ### RECURSIVE CASE ###
    lowest_cost = Infinity
    for each next_color in ["red", "green", "blue"]:
       if next_color != color: # No adjacent houses can be same color.
           this_cost = costs[i][color] + paint(i + 1, next_color) # <- Recursive call
           lowest_cost = min(lowest_cost, this_cost)
    return lowest_cost
 */

function paintHousesII(costs: number[][]): number {
  const n = costs.length;
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < i; j++) {
      min = Math.min(min, dp[j]);
    }
    dp[i] = min + costs[i][0];
  }
  return Math.max(...dp);
}