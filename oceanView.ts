// given an array of building heights where the ocean is to the right of the buildings, return the indices of the buildings that have an ocean view
function oceanView(heights: number[]): number[] {
  let result: number[] = [];
  let left = 0;
  let right = 0;
  while (right < heights.length) {
    if (heights[right] > heights[left]) {
      result.push(left);
      right++;
    } else {
      left++;
    }
  }
  return result;
}

// infinite loop