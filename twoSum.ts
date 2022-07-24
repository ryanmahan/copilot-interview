/**
 * Passed 100% first try
 * O(n) time and memory
 * Optimal solution
 * https://leetcode.com/problems/two-sum
 */


function twoSum(a: number[], target: number) {
  const map = new Map<number, number>();
  for (let i = 0; i < a.length; i++) {
    const diff = target - a[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(a[i], i);
  }
  return [];
}