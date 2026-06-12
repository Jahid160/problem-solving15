// Problem 6
const reverseString = (str) => {
  const reverse = str.split("").reverse().join("");
  return reverse;
};

console.log(reverseString("hello"));

// problem 7
const countVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let x of str.toLowerCase()) {
    for (let p of vowels) {
      if (x == p) {
        count++;
      }
    }
  }
  return count;
};
console.log(countVowels("JAvascript"));

// Problem 8
const isPailndrome = (str) => {
  const reverse = str.split("").reverse().join("");
  if (reverse == str) {
    return true;
  } else {
    return false;
  }
};
console.log(isPailndrome("racecar"));

// Problem 9
const titleCase = (str) => {
  if (typeof str === "string") {
    const splitArray = str.toLowerCase().split(" ");
    const result = splitArray.map((x) => {
      return x.charAt(0).toUpperCase() + x.slice(1);
    });
    return result.join(" ");
  }

  // splitArray.map((x) => {
  //   return x.toUpperCase();
  // });
  return "must be only string";
};
console.log(titleCase("hello world"));

// Problem 10
const countChar = (str, char) => {
  if (typeof str === "string" && typeof char === "string") {
    let value = 0;
    const splitArray = str.split("");
    // const array = splitArray.filter((char) => value++);
    for (let x of splitArray) {
      if (x === char) {
        value++;
      }
    }
    return value;
  }
  return "must be only string";
};
console.log(countChar("banana", "a"));
