// given a class of NestedInteger which can hold either an integer or a array of NestedInteger
// calculate the nested weight of the list, where the weight is the 1 indexed depth times the integers value

function nestedWeight(nestedInteger: NestedInteger): number {
  if (nestedInteger.isInteger()) {
    return nestedInteger.getInteger();
  } else {
    let sum = 0;
    for (let nestedInteger of nestedInteger.getList()) {
      sum += nestedWeight(nestedInteger);
    }
    return sum;
  }
}

// compilation error! also this is a helper function, which it generated first

/**
 * You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists.

The depth of an integer is the number of lists that it is inside of. For example, the nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth.

Return the sum of each integer in nestedList multiplied by its depth.
 */

function nestedListWeightSum(nestedList: NestedInteger[]): number {
  let sum = 0;
  for (let nestedInteger of nestedList) {
    sum += nestedWeight(nestedInteger);
  }
  return sum;
}

// incorrect, there's no depth consideration. Code does not compile