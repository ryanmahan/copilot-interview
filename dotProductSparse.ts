// write a class for a sparse vector with the function dotProduct of another sparse vector
class SparseVector {
  constructor(arr: number[]) {
    this.arr = arr;
    this.prefixSums = [0];
    for (let i = 0; i < arr.length; i++) {
      this.prefixSums.push(this.prefixSums[i] + arr[i]);
    }
  }
  arr: number[];
  prefixSums: number[];
  // return dot product of two sparse vectors
  dotProduct(other: SparseVector): number {
    let sum = 0;
    for (let i = 0; i < this.arr.length; i++) {
      sum += this.arr[i] * other.arr[i];
    }
    return sum;
  }
}

// it found someones suboptimal solution, with the comments directly from leetcode's template