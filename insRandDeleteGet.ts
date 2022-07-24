// create a randomized set class that can insert, delete, and get random elements
class RandomizedSet {
  constructor() {
    this.arr = [];
    this.map = new Map();
  }
  arr: number[];
  map: Map<number, number>;
  
  // insert a value into the set
  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false;
    }
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
  }
  
  // delete a value from the set
  remove(val: number): boolean {
    if (!this.map.has(val)) {
      return false;
    }
    let index = this.map.get(val);
    let last = this.arr.pop();
    if (index !== this.arr.length) {
      this.arr[index] = last;
      this.map.set(last, index);
    }
    this.map.delete(val);
    return true;
  }
  
  // get a random element from the set
  getRandom(): number {
    let index = Math.floor(Math.random() * this.arr.length);
    return this.arr[index];
  }
}