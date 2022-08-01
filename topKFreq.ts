// given an array of numbers and k, return the k most frequent numbers in the array
function kmost(arr: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map(x => x[0]);
}