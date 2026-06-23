// Problem 41: Two Sum  [Easy]
// Description: Given an array of numbers and a target, write a function twoSum(arr, target) that returns the indices of the two numbers that add up to the target.
const twoSum = (arr, target) => {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let cash = target - arr[i];
    if (result[cash] !== undefined) {
      return [result[cash], i];
    }
    result[arr[i]] = i;
  }

  // if (Array.isArray(arr)) {
  //   arr.reduce((arq, curr) => {
  //     if (arq + curr == target) {
  //       result.push();
  //     }
  //   }, 0);
  // }
};
console.log(twoSum([2, 7, 11, 15], 9));

// Problem 42: Check Anagram  [Easy]
// Description: Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.
const isAnagram = (str1, str2) => {
  if (typeof str1 === "string" && typeof str2 === "string") {
    const result =
      str1.split("").sort().join("") === str2.split("").sort().join("");
    return result;
  }
};
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false

// Problem 43: Find Missing Number  [Easy]
// Description: Given an array of n-1 integers from 1 to n with one number missing, write a function findMissing(arr, n) to find the missing number.
const findMissing = (arr, n) => {
  const expected = (n * (n + 1)) / 2;
  const actual = arr.reduce((sum, num) => sum + num, 0);
  return expected - actual;
};
console.log(findMissing([1, 2, 4, 5], 5));

// Problem 44: Valid Parentheses  [Medium]
// Description: Write a function isValidParentheses(str) that returns true if the string has valid, balanced parentheses, brackets, and braces.
const isValidParentheses = (str) => {
  if (typeof str === "string") {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else {
        let prevVal = stack.pop();
        if (prevVal === "(" && char !== ")") return false;
        if (prevVal === "{" && char !== "}") return false;
        if (prevVal === "[" && char !== "]") return false;
        if (prevVal === undefined) return false;
      }
    }
    return stack.length === 0;
  }
};
console.log(isValidParentheses("()[]{}("));
// Problem 45: Binary Search  [Medium]
// Description: Write a function binarySearch(arr, target) that searches a sorted array and returns the index of the target, or -1 if not found.
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch([1, 3, 5, 7, 9], 7));
