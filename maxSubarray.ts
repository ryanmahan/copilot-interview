// find the contiguous subarray with the largest sum
// https://leetcode.com/problems/maximum-subarray/ (suggested)
function maxSubarray(a: number[]) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    max = Math.max(max, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

/**
 * optimal, passed 100% first try
 */