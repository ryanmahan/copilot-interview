/**
 * 13 out of 22 tests passed
 * Generated all the code below
 */


// class that is a LRU cache
// Functions: get, put
class LRUCache {
  capacity: number;
  map: Map<number, number>;
  list: LinkedList;
  // https://leetcode.com/problems/design-linked-list-with-hash-table/ (interesting! this was suggested, not correct problem)

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
    this.list = new LinkedList();
  }

  get(key: number): number {
    if (!this.map.has(key)) {
      return -1;
    }
    // suggested the following, broken code.
    const val = this.map.get(key);
    this.list.remove(key);
    this.list.add(key, val);
    return val;
  }

  put(key: number, value: number) {
    if (this.map.has(key)) {
      this.list.remove(key);
    } else {
      if (this.map.size === this.capacity) {
        const removed = this.list.removeHead();
        this.map.delete(removed);
      }
    }
    this.list.add(key, value);
    this.map.set(key, value);
  }
}

// lets try to get it to generate a linked list class

class Node {
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
  key: number;
  value: number;
  next: Node;

  // copilot suggested the following with it being commented out
  // add(key: number, value: number) {
  //   const node = new Node(key, value);
  //   if (this.next === null) {
  //     this.next = node;
  //   } else {
  //     this.next.add(key, value);
  //   }
  // }

}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  head: Node;
  tail: Node;
  add(key: number, value: number) {
    const node = new Node(key, value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  remove(key: number) {
    if (this.head === null) {
      return;
    }
    if (this.head.key === key) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      if (current.next.key === key) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
  removeHead() {
    if (this.head === null) {
      return;
    }
    const val = this.head.key;
    this.head = this.head.next;
    return val;
  }

}
