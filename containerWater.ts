// you are given a list of numbers which represent heights and their indexes positions on a histogram
// find the two lines that together can hold the most water in the histogram

function holdWater(heights: number[]): number {
  let max = 0;
  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    max = Math.max(max, Math.min(heights[left], heights[right]) * (right - left));
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}