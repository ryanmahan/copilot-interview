// write a class that returns a random index from an array according to the weight of the values in the array
class WeightedPick {
  constructor(arr: number[]) {
    this.arr = arr;
    this.total = 0;
    for (let i = 0; i < arr.length; i++) {
      this.total += arr[i];
    }
  }
  arr: number[];
  total: number;
  
  pickIndex(): number {
    let random = Math.random() * this.total;
    let sum = 0;
    for (let i = 0; i < this.arr.length; i++) {
      sum += this.arr[i];
      if (sum >= random) {
        return i;
      }
    }
    return this.arr.length - 1;
  }
}

// solved, but sub-optimal, binary search would be faster

// write a class that returns a random index from an array according to the weight of the values in the array using binary search of the prefix sums
class WeightedPickBinary {
  constructor(arr: number[]) {
    this.arr = arr;
    this.prefixSums = [0];
    for (let i = 0; i < arr.length; i++) {
      this.prefixSums.push(this.prefixSums[i] + arr[i]);
    }
  }
  arr: number[];
  prefixSums: number[];
  
  // return index of random element using prefix sums of array and a random weight
  pickIndex(): number {
    let random = Math.random() * this.prefixSums[this.prefixSums.length - 1];
    let left = 0;
    let right = this.prefixSums.length - 1;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (this.prefixSums[mid] <= random) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
}

// persuading copilot to use binary search and prefix sums just left us with an incorrect answer
// there might be a way to get copilot to write working code though