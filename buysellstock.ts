// given a list of prices, find the best time to buy and sell a stock
function maxProfit(prices: number[]) {
  let maxProfit = 0;
  let minPrice = Infinity;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
}

/**
 * solved right away, got the function name correct off of the comment
 * optimal, n time, 1 space
 */