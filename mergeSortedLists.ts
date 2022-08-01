// given a list of sorted lists, merge them into one sorted list
function mergeLists(lists: number[][]): number[] {
  const result: number[] = [];
  let i = 0;
  while (i < lists.length) {
    const list = lists[i];
    if (list.length === 0) {
      i++;
      continue;
    }
    result.push(list.shift());
    if (list.length === 0) {
      i++;
    }
  }
  return result;
}

// this doesnt work, it just merges the lists, in order