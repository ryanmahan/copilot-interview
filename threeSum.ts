// given a list of integers, return all triplets that sum to 0
function threeSum(nums: number[]): number[][] {
  let result: number[][] = [];
  let numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    for (let j = i + 1; j < numsLength; j++) {
      for (let k = j + 1; k < numsLength; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return result;
}

// given a list of integers, return all unique triplets that sum to 0
function threeSumUnique(nums: number[]): number[][] {
  let result: number[][] = [];
  let numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    for (let j = i + 1; j < numsLength; j++) {
      for (let k = j + 1; k < numsLength; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return result;
}



/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
 */

function threeSum(nums: number[]): number[][] {
  let result: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
          continue;
      }
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
          let sum = nums[i] + nums[left] + nums[right];
          if (sum === 0) {
              result.push([nums[i], nums[left], nums[right]]);
              left++;
              right--;
              while (left < right && nums[left] === nums[left - 1]) {
                  left++;
              }
              while (left < right && nums[right] === nums[right + 1]) {
                  right--;
              }
          } else if (sum < 0) {
              left++;
          } else {
              right--;
          }
      }
  }
  return result;
}

// after copy/pasting the exact description it worked