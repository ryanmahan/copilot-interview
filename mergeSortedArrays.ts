// given two sorted arrays and their sizes merge them into one sorted array
// overwrite the first array with the merged array
function merge(arr1: number[], arr2: number[], size1: number, size2: number): number[] {
  let i = 0;
  let j = 0;
  while (i < size1 && j < size2) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else {
      const temp = arr1[i];
      arr1[i] = arr2[j];
      arr1[j] = temp;
      j++;
    }
  }
  return arr1;
}