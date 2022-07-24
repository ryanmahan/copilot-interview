// Given n non-negative integers, representing the land's height, calculate the amount of rainwater the map can trap
function rainwater(a: number[]) {
  let max = 0;
  let left = 0;
  let right = a.length - 1;
  while (left < right) {
    max = Math.max(max, Math.min(a[left], a[right]) * (right - left));
    if (a[left] < a[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

// the above failed

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
function trap(a: number[]) {
  let max = 0;
  let left = 0;
  let right = a.length - 1;
  while (left < right) {
    max = Math.max(max, Math.min(a[left], a[right]) * (right - left));
    if (a[left] < a[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

// with the exact same prompt as the question, copilot suggests the same solution as above