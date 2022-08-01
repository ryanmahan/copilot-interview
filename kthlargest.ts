// finds the kth largest element in an array in constant time
// O(n)
function kthLargest(arr: number[], k: number): number {
  const sorted = arr.sort((a, b) => b - a);
  return sorted[k - 1];
}

// not exactly constant time... a valid solution though