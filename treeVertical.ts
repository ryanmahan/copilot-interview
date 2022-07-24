// traverse a tree in vertical order and return it's nodes in a 2D array
function traverse(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  let result: number[][] = [];
  let queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length > 0) {
    let level: number[] = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    result.push(level);
  }
  return result;
}

// hey wait a second this is level order!

// traverse a tree in vertical order (from top to bottom, column by column) and return it's nodes in a 2D array
function traverseVertically(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  let result: number[][] = [];
  let queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length > 0) {
    let level: number[] = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    result.push(level);
  }
  return result;
}

// level order again