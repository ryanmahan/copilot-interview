// find the lowest common ancestor of two nodes in a binary tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/ (suggested)
function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode) {
  if (!root) {
    return null;
  }
  if (root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) {
    return root;
  }
  return left || right;
}

// incorrectly suggested the answer to lowest common ancestor #1

// given two nodes find their lowest common ancestor
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/ (suggested)
function lowestCommonAncestor2(root: TreeNode, p: TreeNode, q: TreeNode) {
  if (!root) {
    return null;
  }
  if (root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor2(root.left, p, q);
  const right = lowestCommonAncestor2(root.right, p, q);
  if (left && right) {
    return root;
  }
  return left || right;
}

// interesting, it suggested #2 this time

// given two nodes, find their lowest common ancestor. Each node contains a parent pointer.
function lowestCommonAncestor3(root: TreeNode, p: TreeNode, q: TreeNode) {
  if (!root) {
    return null;
  }
  if (root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor3(root.left, p, q);
  const right = lowestCommonAncestor3(root.right, p, q);
  if (left && right) {
    return root;
  }
  return left || right;
}

// find the root of a binary tree with parent pointers
function findRoot(node: TreeNode) {
  if (!node) {
    return null;
  }
  if (!node.parent) {
    return node;
  }
  return findRoot(node.parent);
}

// class names are wrong for this problem, but I'll fix that manually

/**
 * This problem needed some nudging, but was solved without writing any code, just minor corrections and comments
 * the above attempt passed all test, optimally
 */