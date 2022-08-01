// given a list of numbers and a target, return how many triplets add to the target
// numbers can be repeated
function triplets(nums: number[], target: number): number {
  const map = new Map<number, number>();
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  let count = 0;
  for (const num of nums) {
    const other = target - num;
    if (map.has(other)) {
      count += map.get(other);
    }
  }
  return count;
}

// not exactly sure what this is supposed to do