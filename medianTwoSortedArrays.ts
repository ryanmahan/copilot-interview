// find the median for two sorted arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/ (suggested)
//
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merged = nums1.concat(nums2);
  merged.sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  }
  return merged[mid];
}

/**
 * Correct, but not optimal
 * Optimal is log time, this is nLog(n)
 * Was able to generate from just the comment (and get the link)
 * Suggesting that it's finding leetcode answers exactly
*/