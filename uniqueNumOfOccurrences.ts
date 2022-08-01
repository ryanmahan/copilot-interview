// return true if all elements of the array have a unique number of occurrences
function occurrences(nums: number[]): boolean {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return false;
    }
    set.add(num);
  }
  return true;
}
