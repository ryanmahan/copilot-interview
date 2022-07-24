// given an array, return the number of subarrays that sum to k
function subarrays(arr: number[], k: number): number {
  let count = 0;
  let sum = 0;
  let start = 0;
  let end = 0;
  while (end < arr.length) {
    sum += arr[end];
    while (sum >= k) {
      count++
      sum -= arr[start];
      start++;
    }
    end++;
  }
  return count;
}

// given an array and a number k, count the number of subarrays that sum to k
function subarraySum(arr: number[], k: number): number {
  let count = 0;
  let sum = 0;
  let start = 0;
  let end = 0;
  while (end < arr.length) {
    sum += arr[end];
    while (sum >= k) {
      count++
      sum -= arr[start];
      start++;
    }
    end++;
  }
  return count;
}

// both examples are incorrect, but close-ish. They pass 11/92 test cases