// Problem 11
const sumArray = (arr) => {
  let total = 0;
  if (Array.isArray(arr)) {
    arr.reduce((aqu, curr) => {
      return (total = aqu + curr);
    }, 0);
  }
  return total;
};
console.log(sumArray([1, 2, 3, 4, 5]));

// Problem 12
const findMax = (arr) => {
  let maxNumber = 0;
  if (Array.isArray(arr)) {
    for (let x of arr) {
      if (maxNumber < x) {
        maxNumber = x;
      }
    }
  }
  return maxNumber;
};
console.log(findMax([3, 1, 7, 2, 9]));

// Problem 13
const removeDuplicates = (arr) => {
  if (Array.isArray(arr)) {
    const result = [...new Set([...arr])];
    return result;
  }
};
console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

// Problem 14
const flattenArray = (arr) => {
  if (Array.isArray(arr)) {
    const flatArray = arr.flat(Infinity);
    return flatArray;
  }
};
console.log(flattenArray([1, [2, 3], [4, 5]]));

// Problem 15
const chunkArray = (arr, size) => {
  if (Array.isArray(arr) && typeof size === "number") {
    let result = [];
    let i = 0;
    const totalArray = Math.ceil(arr.length / size);
    while (i < arr.length) {
      result.push(arr.slice(i, i + size));
      i += size;
    }
    return result;
  }
};
console.log(chunkArray([1, 2, 3, 4, 5], 2));
