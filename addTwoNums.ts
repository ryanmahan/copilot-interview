// given two linked lists of numbers, add the numbers and return a linked list
function sum(l1: LinkedList, l2: LinkedList) {
  let current1 = l1.head;
  let current2 = l2.head;
  let sum = 0;
  let carry = 0;
  let result = new LinkedList();
  while (current1 !== null || current2 !== null) {
    if (current1 !== null) {
      sum += current1.value;
      current1 = current1.next;
    }
    if (current2 !== null) {
      sum += current2.value;
      current2 = current2.next;
    }
    result.add(sum % 10);
    sum = Math.floor(sum / 10);
  }
  if (sum > 0) {
    result.add(sum);
  }
  return result;
}

// given two linked list nodes, add the numbers and return the head of a linked list that sums the two 
function sumNodes(node1: ListNode | null, node2: ListNode | null): ListNode {
  let sum = 0;
  let carry = 0;
  let result = new ListNode(0);
  let current = result;
  while (node1 !== null || node2 !== null) {
    if (node1 !== null) {
      sum += node1.value;
      node1 = node1.next;
    }
    if (node2 !== null) {
      sum += node2.value;
      node2 = node2.next;
    }
    current.next = new ListNode(sum % 10);
    current = current.next;
    sum = Math.floor(sum / 10);
  }
  if (sum > 0) {
    current.next = new ListNode(sum);
  }
  return result.next;
}

// this problem is hard to describe correctly, lets try the description from the problem

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

function addTwoNumbers(l1: LinkedList, l2: LinkedList): LinkedList {
  let current1 = l1.head;
  let current2 = l2.head;
  let sum = 0;
  let carry = 0;
  let result = new LinkedList();
  while (current1 !== null || current2 !== null) {
    if (current1 !== null) {
      sum += current1.value;
      current1 = current1.next;
    }
    if (current2 !== null) {
      sum += current2.value;
      current2 = current2.next;
    }
    result.add(sum % 10);
    sum = Math.floor(sum / 10);
  }
  if (sum > 0) {
    result.add(sum);
  }
  return result;
}

// the types are wrong, but the solution is nearly there